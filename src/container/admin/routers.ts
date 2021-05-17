import express from 'express';
import { AdminController } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

// get the validator middleware from authentication schema
import { validateUpdate, validateUpdatePermissionAndRole } from './index';

const router = express.Router();

/**
 *  Admin API is subjected with /api/admin prefix
 *  Eg. /api/admin/get-all
 */

/**
 * Route to get all administrator
 * @param { token, type } req
 *
 */
router.get('/get-all', [jwtAuth, checkAccess, checkIfAdmin], AdminController.getAllAdmin);

/**
 * Route to get one administrator
 * @param { req.param.id } req
 *
 */
router.get('/:id', [jwtAuth, checkAccess, checkIfAdmin], AdminController.getOneAdmin);

/**
 *  Route to edit administrator information
 *  @params { adminId, name, gender, date of birth, nationality, contact number, home address, current and permanent address }
 */
router.put('/update/:id', [jwtAuth, checkAccess, checkIfAdmin, validateUpdate()], AdminController.updateInformation);

/**
 *  Route to edit administrator permissions and role
 *  @params { role, permissions }
 */
router.put('/update/permission-role/:id', [jwtAuth, checkAccess, checkIfAdmin, validateUpdatePermissionAndRole()], AdminController.updatePermissionAndRole);

export = router;
