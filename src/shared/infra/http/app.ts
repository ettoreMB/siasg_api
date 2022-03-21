import express, { json } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';
import '../../../shared/containers'
import createConnection from './typeorm';
import { router } from './routes';

createConnection()
const app = express();

app.use(json());
app.use(express.json());
app.use(cors());
app.use(router);

export { app };