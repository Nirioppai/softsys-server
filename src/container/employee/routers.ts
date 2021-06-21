import express from 'express';
import { EmployeeController } from './index';
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
router.get('/', EmployeeController.getAll);

/**
 * Route to get one employeeInformation
 * @param { } req
 *
 */
router.get('/:id', EmployeeController.getOne);

/**
 * Route to update employeeInformation
 * @param {  } req
 *
 */
router.put('/:id', EmployeeController.updateOne);

/**
 * Route to delete employeeInformation
 * @param {  } req
 *
 */
router.delete('/:id', EmployeeController.deleteOne);

/**
 * Route to DELETE Many employeeInformation
 * @param { token, type } req
 *
 */
router.delete('/many', EmployeeController.deleteMany);

export = router;
