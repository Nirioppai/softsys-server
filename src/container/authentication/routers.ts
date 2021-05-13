import express from 'express';
import { authController, validate } from './index';

const router = express.Router();

/**
 *  Auth API is subjected with /api/auth prefix
 *  Eg. /api/auth/login
 */

/**
 * Route to log in a user
 * @param { email, password } req
 *
 */
router.post('/login', authController.login);

/**
 *  Route to get all adminis
 */
router.post('/admin/register', [validate()], authController.register);

export = router;
