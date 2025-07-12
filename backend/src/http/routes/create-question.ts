import { and, eq, sql } from 'drizzle-orm';
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';
import { generateAnswer, generateEmbeddings } from '../../services/gemini.ts';

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/questions',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const { question } = request.body;

      const embeddings = await generateEmbeddings(question);

      const embeddingsAsString = `[${embeddings.join(',')}]`;

      const chunks = await db
        .select({
          id: schema.audioChunks.id, // Select the ID of the audio chunk
          transcription: schema.audioChunks.transcription, // Select the text transcription of the chunk
          similarity: sql<number>`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector)`,
          // Calculate similarity between the stored embedding and the input embedding vector
          // The <=> operator computes the vector distance (pgvector extension in PostgreSQL)
          // Subtracting from 1 converts distance into similarity (1 = identical, 0 = no similarity)
        })
        .from(schema.audioChunks) // Query data from the audioChunks table
        .where(
          and(
            eq(schema.audioChunks.roomId, roomId), // Filter chunks by a specific room ID
            sql`1 - (${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector) > 0.7`
            // Only include results with similarity greater than 0.7
            // This acts as a relevance threshold for semantic similarity
          )
        )
        .orderBy(
          sql`${schema.audioChunks.embeddings} <=> ${embeddingsAsString}::vector`
        )
        // Order results by ascending distance (most similar first)
        // Because lower distance means higher semantic similarity
        .limit(3); // Limit to the top 3 most similar chunks

      let answer: string | null = null;

      if (chunks.length > 0) {
        const transcriptions = chunks.map((chunk) => chunk.transcription);

        answer = await generateAnswer(question, transcriptions);
      }

      const result = await db
        .insert(schema.questions)
        .values({
          roomId,
          question,
          answer,
        })
        .returning();

      const insertedQuestion = result[0];

      if (!insertedQuestion) {
        throw new Error('Failed to create a new question.');
      }

      return reply
        .status(201)
        .send({ questionId: insertedQuestion.id, answer });
    }
  );
};
