import express from 'express';
import controller from './controller';

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
router.post('/login', controller.login);

/**
 *  Route to get all adminis
 */
router.post('/register', controller.register);

export = router;
