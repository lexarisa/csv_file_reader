import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import songRouter from './routes/routes.song';

const app: Application = express();
const PORT = 3002 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(songRouter);

app.listen(PORT, (): void => {
  console.log(`Server is up and running on http://localhost:${PORT} `);
});
