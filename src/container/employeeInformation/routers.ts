import express from 'express';
import { EmployeeInformationController, validation } from './index';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

const router = express.Router();

/**
 *  employeeInformation API is subjected with /api/employeeInformation prefix
 *  Eg. /api/employeeInformation/get-all
 */

/**
 * Route to get all employeeInformation
 * @param { } req
 *
 */
router.get('/', [jwtAuth, checkIfAdmin], EmployeeInformationController.getAllEmployeeInformation);

/**
 * Route to get one employeeInformation
 * @param { } req
 *
 */
router.get('/:id', [jwtAuth, checkIfAdmin], EmployeeInformationController.getEmployeeInformation);

/**
 * Route to add employeeInformation
 * @param {  } req
 *
 */
router.post('/', [jwtAuth, checkIfAdmin, validation()], EmployeeInformationController.addEmployeeInformation);

/**
 * Route to update employeeInformation
 * @param {  } req
 *
 */
router.patch('/:id', [jwtAuth, checkIfAdmin, validation()], EmployeeInformationController.updateEmployeeInformation);

/**
 * Route to delete employeeInformation
 * @param {  } req
 *
 */
router.delete('/:id', [jwtAuth, checkIfAdmin], EmployeeInformationController.deleteEmployeeInformation);

export = router;
