import express from 'express';
import { getAllSongs } from '../controllers/song.controller';

const router = express.Router();
router.get('/songs', getAllSongs);

export default router;
