import express from 'express';
const router = express.Router();
import * as SimulateController from '../controllers/Simulate.controller';

router.get('/', SimulateController.SIMULATE);

export default router;