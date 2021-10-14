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
router.get('/get-all-roles', [jwtAuth], RoleController.getAllRoles);

/**
 * GET One Role
 *
 */
router.get('/get-one-role/:id', [jwtAuth], RoleController.getOneRole);

/**
 * POST One Role
 *
 */
router.post('/create', [jwtAuth], RoleController.createRole);

/**
 *  PUT One Role
 */
router.put('/update/:id', [jwtAuth], RoleController.updateRole);

/**
 * DELETE One Role
 */
router.delete('/delete/:id', [jwtAuth], RoleController.deleteOneRole);

/**
 * DELETE Many Role
 */
router.delete('/delete-many', [jwtAuth], RoleController.deleteManyRole);

export = router;
