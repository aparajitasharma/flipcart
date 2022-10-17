import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import defaultData from './default.js'

dotenv.config();
const app = express();
const PORT=8000;

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

Connection( username, password);
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));

defaultData();