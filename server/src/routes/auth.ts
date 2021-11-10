import express, { Request, Response } from 'express';
import * as AuthController from '../controllers/AuthController';
import verifyEmailAndPassword from '../middleware/verifyEmailAndPassword';

const router = express.Router();

/**
 * @route POST /login
 * @desc Login a user using an email and password
 * @access Public
 */
router.post('/login', verifyEmailAndPassword, AuthController.LOGIN_USER);

/**
 * @route POST /register
 * @desc Register a user using a name, email, and password
 * @access Public
 */
router.post('/register', verifyEmailAndPassword, AuthController.REGISTER_USER);

export default router;