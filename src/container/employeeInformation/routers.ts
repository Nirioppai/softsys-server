import express from 'express';
import { EmployeeInformationController } from './index';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

const router = express.Router();

/**
 *  employeeInformation API is subjected with /api/employeeInformation prefix
 *  Eg. /api/employeeInformation/get-all
 */

/**
 * Route to get all employeeInformation
 * @param { email, password } req
 *
 */
router.get('/get-all', [jwtAuth, checkIfAdmin], EmployeeInformationController.getAllEmployeeInformation);

export = router;
