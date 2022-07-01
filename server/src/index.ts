import express, { Application } from 'express';
import cors from 'cors';
import songRouter from './routes/routes.song';
import dotenv from 'dotenv';
import path from 'path';

const app: Application = express();
dotenv.config({ path: path.join(__dirname, '.env') });
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(songRouter);

app.listen(PORT, (): void => {
  console.log(`Server is up and running on http://localhost:${PORT} `);
});
