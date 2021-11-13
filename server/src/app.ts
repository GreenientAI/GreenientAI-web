import express, { Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import authRouter from './routes/auth';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const router = express.Router();
const app = express();

function retryConnection() {
  mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error(err)
    setTimeout(retryConnection, 5000)
  });
}

retryConnection();

app.enable('trust proxy')
app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

router.use('/', indexRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: '404 Not Found',
  });
});

export default app;
