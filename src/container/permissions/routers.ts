import express from 'express';
import { PermissionController } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Auth API is subjected with /api/auth prefix
 *  Eg. /api/auth/login
 */

/**
 *  Route to get all adminis
 */
router.post('/admin/register');

/**
 * GET All Permissions
 *
 */
router.get('/get-all-permissions', [jwtAuth, checkIfAdmin], PermissionController.getAllPermission);

/**
 * GET One Permissions
 *
 */
router.get('/get-one-permission/:permission', [jwtAuth, checkIfAdmin], PermissionController.getOnePermission);

export = router;
