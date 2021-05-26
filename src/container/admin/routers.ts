import express from 'express';
import { AdminController, validateUpdate, validateUpdatePermissionAndRole, validateIdsToBeDeleted } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

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
router.get('/get-all', [jwtAuth, checkAccess(['Admin:Read']), checkIfAdmin], AdminController.getAllAdmin);

/**
 * Route to get one administrator
 * @param { req.param.id } req
 *
 */
router.get('/:id', [jwtAuth, checkAccess(['Admin:Read']), checkIfAdmin], AdminController.getOneAdmin);

/**
 *  Route to edit administrator information
 *  @params { adminId, name, gender, date of birth, nationality, contact number, home address, current and permanent address }
 */
router.put('/update/:id', [jwtAuth, checkAccess(['Admin:Read', 'Admin:Update']), checkIfAdmin, validateUpdate()], AdminController.updateInformation);

/**
 *  Route to edit administrator permissions and role
 *  @params { role, permissions }
 */
router.put('/update/permission-role/:id', [jwtAuth, checkAccess(['Admin:Read', 'Admin:Update']), validateUpdatePermissionAndRole()], AdminController.updatePermissionAndRole);

/**
 * DELETE Admin
 *
 */
router.delete('/delete/:id', [jwtAuth, checkAccess(['Admin:Read', 'Admin:Delete']), checkIfAdmin], AdminController.deleteAdmin);

/**
 * DELETE Many Admin
 */

router.delete('/delete-many', [jwtAuth, checkAccess(['Admin:Read', 'Admin:Delete']), checkIfAdmin, validateIdsToBeDeleted()], AdminController.deleteManyAdmin);

/**
 * GET All Admin Permissions
 *
 */
router.get('/get-all-permissions/:id', [jwtAuth, checkAccess(['Admin:Read']), checkIfAdmin], AdminController.getAllPermissions);

/**
 * GET One Admin Permissions
 *
 */
router.get('/get-one-permission/:id/:permission', [jwtAuth, checkAccess(['Admin:Read']), checkIfAdmin], AdminController.getOnePermission);

export = router;
