import express from 'express';
import { jwtAuth, checkAccess, checkIfAdmin } from '../../_common/check-token';
import { authController, validateRegister, validateRegisterEmployee, validateLogin } from './index';

const router = express.Router();

/**
 *  Auth API is subjected with /api/auth prefix
 *  Eg. /api/auth/login
 */

/**
 *  Auth Route for admin
 */
router.post('/admin/login', [validateLogin('admin')], authController.login('admin'));
router.post('/admin/register', [jwtAuth, checkAccess(['Admin:Create']), checkIfAdmin, validateRegister()], authController.register('admin'));

/**
 *  Auth Route for employee
 */
router.post('/employee/register', [jwtAuth, checkAccess(['Employee:Create']), checkIfAdmin, validateRegisterEmployee()], authController.register('employee'));
router.post('/employee/login', [validateLogin('employee')], authController.login('employee'));

export = router;
