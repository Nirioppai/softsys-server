import express from 'express';
import { PermissionController } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Auth API is subjected with /api/permission prefix
 *  Eg. /api/permission/get-all-permissions
 */

/**
 * GET All Permissions
 *
 */
router.get('/get-all-permissions', [jwtAuth], PermissionController.getAllPermission);

/**
 * GET One Permissions
 *
 */
router.get('/get-one-permission/:id', [jwtAuth], PermissionController.getOnePermission);

export = router;
