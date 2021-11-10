import express, { Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import authRouter from './routes/auth';

dotenv.config({  path: path.resolve(__dirname, '../.env') });
const router = express.Router();
const app = express();

mongoose.connect(process.env.MONGO_URI as string);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router)

router.use('/', indexRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: "404 Not Found"
  });
});

module.exports = app;
