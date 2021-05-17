import express from 'express';
import { AdminController } from './index';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

const router = express.Router();

/**
 *  Admin API is subjected with /api/admin prefix
 *  Eg. /api/admin/get-all
 */

/**
 * Route to get all administrator
 * @param { email, password } req
 *
 */
router.get('/get-all', [jwtAuth, checkIfAdmin], AdminController.getAllAdmin);

/**
 * DELETE Admin
 *
 */
router.delete('/delete/:adminId', [jwtAuth, checkIfAdmin], AdminController.deleteAdmin);

/**
 * GET All Permissions
 *
 */
router.get('/get-all-permissions', [jwtAuth, checkIfAdmin], AdminController.getAllPermission);

/**
 * GET One Permissions
 *
 */
router.get('/get-one-permission/:permission', [jwtAuth, checkIfAdmin], AdminController.getOnePermission);

export = router;
