### Thing or Two Take Home Test

#### Installation


- Clone the repo

```
git clone https://github.com/lexarisa/csv_file_reader.git

```

- Install requirements with ```npm install``` from project root folder, /server and /client folders
- Add the three .env files in client/ and server/ folders (see examples below)
- Generate Prisma artifacts and sync database schema with prisma client with ``` npx prisma generate ``` and ``` npx prisma db push ``` from /server folder.
- Seed the database 

```
cd server
npx prisma db seed

```

#### Server

- Creat your .env file in the server directory
```
DATABASE_URL="postgres://yarprxpmpagnjb:e8d55126e008a583bde24719878170b36ef2f44e461c06437870d515d61c0379@ec2-23-23-182-238.compute-1.amazonaws.com:5432/dd4gipcrqf76ob"
SHADOW_DATABASE_URL="postgres://xxtkmmlheqshpv:0922e393f941586e0c1e43fcb54b3bdefb539813fc8edaddc7b4ddc33e6c58cd@ec2-23-23-182-238.compute-1.amazonaws.com:5432/d70515i1nf16tg"
PORT=YOUR_PORT
```

- Run the server
```
cd server
npm run start
```


#### Front-End 

- Run the app
```
cd client
npm run start

```
- Create your .env.local file in the client directory

```
REACT_APP_BASEURL=http://localhost:3002

```

