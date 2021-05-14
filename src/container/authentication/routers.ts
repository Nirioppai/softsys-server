import express from 'express';
import { authController, validate, validateLogin } from './index';

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
router.post('/login', [validateLogin()], authController.login);

/**
 *  Route to get all adminis
 */
router.post('/register', [validate()], authController.register);

export = router;
