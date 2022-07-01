### Thing or Two Take Home Test

#### Installation

Set up
Create a Firebase app for authentication and image storage
Create an empty PostgreSQL database as well as an empty test database (e.g. Curbside and Curbside_TEST)
Installation
Fork and clone the repo
Add the three .env files in client/ and server/ folders (see examples below)
Install requirements with npm install from project root folder, /server and /client folders
Generate Prisma artifacts and sync database schema with prisma client with npx prisma generate and npx prisma db push from /server folder.

- Clone the repo

```
git clone https://github.com/lexarisa/csv_file_reader.git

```

#### Front-End 

- Install NPM packages

```
npm install

```

- Run the app
```
cd client
npm run start

```
- Create your .env.local file in the client directory

```
REACT_APP_BASEURL=http://localhost:3002

```

#### Server

- Install NPM packages

```
npm install

```
- Creat your .env file in the server directory
```
DATABASE_URL="postgres://yarprxpmpagnjb:e8d55126e008a583bde24719878170b36ef2f44e461c06437870d515d61c0379@ec2-23-23-182-238.compute-1.amazonaws.com:5432/dd4gipcrqf76ob"
SHADOW_DATABASE_URL="postgres://xxtkmmlheqshpv:0922e393f941586e0c1e43fcb54b3bdefb539813fc8edaddc7b4ddc33e6c58cd@ec2-23-23-182-238.compute-1.amazonaws.com:5432/d70515i1nf16tg"
PORT=YOUR_PORT
```
- Seed the database

```
cd server
npx prisma db seed

```

- Run the server
```
cd server
npm run start
```
