import fs from 'fs';
import { prisma } from '../prisma/prisma-client';
import csvToJSON from '../src/utils/csvToJSON';

//read the file with fs
let rawData = fs.readFileSync('../song_list.csv', 'utf-8');

//cleanup data
const data = csvToJSON(rawData);

const runSeeding = async () => {
  await Promise.all(
    data.map((item: any) => {
      return prisma.song.upsert({
        where: { id: item.id },
        update: {},
        create: {
          id: item.id,
          name: item.name,
          band: item.band,
          year: Number(item.year),
        },
      });
    })
  );
};

runSeeding()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
