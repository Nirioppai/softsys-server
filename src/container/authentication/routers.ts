import express from 'express';
import { authController, validateRegister, validateLogin } from './index';

const router = express.Router();

/**
 *  Auth API is subjected with /api/auth prefix
 *  Eg. /api/auth/login
 */

/**
 *  Auth Route for admin
 */
router.post('/admin/login', [validateLogin('admin')], authController.login('admin'));
router.post('/admin/register', [validateRegister()], authController.register('admin'));

/**
 *  Auth Route for employee
 */
router.post('/employee/register', [validateRegister()], authController.register('employee'));
router.post('/employee/login', [validateLogin('employee')], authController.login('employee'));

export = router;
