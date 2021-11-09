import express from 'express';
import * as UsersController from '../controllers/UsersController';

const router = express.Router();

/**
 * @route GET /
 * @desc Get all users
 * @access Private
 */
router.get('/', UsersController.GET_USERS);

/**
 * @route GET /:id
 * @desc Get a specific user
 * @access Private
 */
router.get('/:id', UsersController.GET_USER_BY_ID);

/**
 * @route PATCH /:id
 * @desc Edit a specific user
 * @access Private
 */
router.patch('/:id', UsersController.EDIT_USER);

/**
 * @route DELETE /:id
 * @desc Delete a specific user
 * @access Private
 */
router.delete('/:id', UsersController.DELETE_USER);

export default router;