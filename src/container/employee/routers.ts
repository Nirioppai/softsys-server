import express from 'express';
import { EmployeeController } from './index';
import { jwtAuth } from '../../_common/check-token';

const router = express.Router();

/**
 *  Employee API is subjected with /api/employee prefix
 *  Eg. /api/employee/get-all
 */

/**
 * Route to get all employee
 * @param { email, password } req
 *
 */
router.get('/get-all', [jwtAuth], EmployeeController.getAllEmployee);

export = router;
