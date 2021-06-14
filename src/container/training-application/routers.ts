import express from 'express';
import ApplicationController from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Application-Training API is subjected with /api/application prefix
 *  Eg. /api/application/get-all
 */

/**
 * Route to get all administrator
 * @param { token, type } req
 *
 */
router.get('/get-all', [jwtAuth], ApplicationController.getAllApplication);

export = router;
