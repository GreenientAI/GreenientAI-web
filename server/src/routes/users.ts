import express from 'express';
import * as UsersController from '../controllers/UsersController';

const router = express.Router();

/**
 * @route GET /:id?
 * @desc Get all users or get a specific user
 * @access Private
 */
router.get('/:id?', UsersController.GET_USERS);

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