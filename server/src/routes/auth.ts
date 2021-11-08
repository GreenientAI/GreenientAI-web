import express, { Request, Response } from 'express';
import * as AuthController from '../controllers/AuthController';

const router = express.Router();

/**
 * @route POST /login
 * @desc Login a user using an email and password
 * @access Public
 */
router.post('/login', AuthController.LOGIN_USER);

/**
 * @route POST /register
 * @desc Register a user using a name, email, and password
 * @access Public
 */
router.post('/register', AuthController.REGISTER_USER);

export default router;