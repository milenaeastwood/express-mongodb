import express from 'express';
import './db.js';
import {studentRouter} from './routes/studentRouter.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/students', studentRouter);

export default app;