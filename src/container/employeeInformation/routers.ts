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
router.get('/', [jwtAuth], EmployeeInformationController.getAllEmployeeInformation);
/**
 * Route to get all employeeInformation
 * @param { } req
 *
 */
router.get('/:id', [jwtAuth], EmployeeInformationController.getEmployeeInformation);
/**
 * Route to add employeeInformation
 * @param {  } req
 *
 */
router.post('/', [jwtAuth, validation()], EmployeeInformationController.addEmployeeInformation);
/**
 * Route to update employeeInformation
 * @param {  } req
 *
 */
router.patch('/:id', [jwtAuth], EmployeeInformationController.updateEmployeeInformation);
/**
 * Route to delete employeeInformation
 * @param {  } req
 *
 */
router.delete('/:id', [jwtAuth], EmployeeInformationController.deleteEmployeeInformation);

export = router;
