import { prisma } from '../../prisma/prisma-client';
import { Request, Response } from 'express';

export async function getAllSongs(req: Request, res: Response) {
  try {
    const songs = await prisma.song.findMany();
    res.status(201);
    res.send(songs);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
}
