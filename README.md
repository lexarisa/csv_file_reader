### CSV File Reader

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
DATABASE_URL=YOUR_DATABASE_URL
SHADOW_DATABASE_URL=YOUR_SHADOWDATABASE_URL
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

