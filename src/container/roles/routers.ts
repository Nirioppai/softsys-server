import express from 'express';
import { RoleController, validateCreate, validateDeleteMany } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Auth API is subjected with /api/role prefix
 *  Eg. /api/role/get-all-roles
 */

/**
 * GET All Roles
 *
 */
router.get('/get-all-roles', [jwtAuth, checkAccess(['Role:Read']), checkIfAdmin], RoleController.getAllRoles);

/**
 * GET One Role
 *
 */
router.get('/get-one-role/:id', [jwtAuth, checkAccess(['Role:Read']), checkIfAdmin], RoleController.getOneRole);

/**
 * POST One Role
 *
 */
router.post('/create', [jwtAuth, checkAccess(['Role:Read', 'Role:Create']), checkIfAdmin, validateCreate()], RoleController.createRole);

/**
 *  PUT One Role
 */
router.put('/update/:id', [jwtAuth, checkAccess(['Role:Read', 'Role:Update']), checkIfAdmin, validateCreate()], RoleController.updateRole);

/**
 * DELETE One Role
 */
router.delete('/delete/:id', [jwtAuth, checkAccess(['Role:Read', 'Role:Delete']), checkIfAdmin], RoleController.deleteOneRole);

/**
 * DELETE Many Role
 */
router.delete('/delete-many', [jwtAuth, checkAccess(['Role:Read', 'Role:Delete']), checkIfAdmin, validateDeleteMany()], RoleController.deleteManyRole);

export = router;
