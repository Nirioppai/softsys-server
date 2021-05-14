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

export = router;
