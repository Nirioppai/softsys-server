import express from 'express';
import { uploadManyAdminAccount, validateAccounts, checkDuplicated } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Admin API is subjected with /api/uploads prefix
 *  Eg. /api/uploads/admin-many
 */

/**
 * Route to upload all administrator
 * @param { token, type } req
 *
 */
router.post('/admin-many', [jwtAuth, checkAccess(['Admin:Read', 'Admin:Create']), checkIfAdmin, validateAccounts(), checkDuplicated()], uploadManyAdminAccount);

export = router;
