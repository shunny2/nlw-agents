<p align="center">
  <a href="#about-application">About Application</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to Run</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#figma">Figma</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#project-status">Project Status</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

</br>

![nlw-agents](https://github.com/user-attachments/assets/e5cf4de1-e2ff-42b0-b34f-7d1da7bd7904)

<p align="center">
  <a href="https://img.shields.io/github/stars/shunny2/nlw-agents?style=social"><img src="https://img.shields.io/github/stars/shunny2/nlw-agents?style=social" alt="Repo Stars"/></a>
  <a href="https://img.shields.io/github/forks/shunny2/nlw-agents?style=social"><img src="https://img.shields.io/github/forks/shunny2/nlw-agents?style=social" alt="Repo Forks"/></a>
  <a href="https://img.shields.io/github/license/shunny2/nlw-agents?style=social"><img src="https://img.shields.io/github/license/shunny2/nlw-agents?style=social" alt="License"/></a>
</p>

## About Application

<b>NLW-agents (Letmeask)</b> is a modern Q&A platform designed for live broadcasts and streaming events. It allows users to create interactive rooms where participants can ask questions and receive real-time answers powered by artificial intelligence.
This project was originally developed during Next Level Week, an event organized by [Rocketseat](https://www.rocketseat.com.br/).

## Technologies

### Frontend

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://react.dev/" title="React"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React logo image." /></a>
    </td>
    <td>
      <a href="https://vitejs.dev/" title="Vitejs"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" alt="Vitejs logo image." /></a>
    </td>
    <td>
      <a href="https://ui.shadcn.com/" title="Shadcn/UI"><img width="128" height="128" src="https://simpleicons.org/icons/shadcnui.svg" alt="Shadcn/UI logo image." /></a>
    </td>
    <td>
      <a href="https://tailwindcss.com/" title="Tailwindcss"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwindcss logo image." /></a>
    </td>
  </tbody>
</table>

### Backend

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://nodejs.org/en/" title="NodeJS"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="Node.js logo image." /></a>
    </td>
    <td>
      <a href="https://fastify.dev/" title="Fastify"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/fastify.svg" alt="Fastify logo image." /></a>
    </td>
    <td>
      <a href="https://orm.drizzle.team/" title="Drizzle ORM"><img width="128" height="128" src="https://simpleicons.org/icons/drizzle.svg" alt="Drizzle ORM logo image." /></a>
    </td>
    <td>
      <a href="http://gemini.google.com/" title="GeminiAI"><img width="128" height="128" src="https://simpleicons.org/icons/googlegemini.svg" alt="GeminiAI logo image." /></a>
    </td>
  </tbody>
</table>

### Database

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://www.postgresql.org/" title="PostgreSQL"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL logo image." /></a>
    </td>
  </tbody>
</table>

## How to Run

First, start by cloning the repository:
```shell
git clone https://github.com/shunny2/nlw-agents
```

Open each of the folders (frontend and backend) and run the command below to install the project dependencies.
```bash
npm install
```

Run the command to start the server:
```bash
npm run dev
```

In the backend folder, run the command below to start the database container.
```bash
docker-compose up -d
```

Check for changes with the command:
```bash
npm run db:generate
```

Run migrations to create the database tables:
```bash
npm run db:migrate
```

To view the database tables and data, go to the backend folder and run the command:
```bash
npx drizzle-kit studio
```

To add dummy data to the database, run the command:
```bash
npm run db:seed
```

## Figma

See the project <b>LetMeAsk</b> prototype in [figma](https://www.figma.com/community/file/1009824839797878169).

## Project Status

> Status: Completed.

## License

This project is under an [MIT](https://opensource.org/licenses/MIT) license.

<hr/>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis</b></a>.</p>
