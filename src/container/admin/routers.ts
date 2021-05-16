import express from 'express';
import { AdminController } from './index';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

// get the validator middleware from authentication schema
import { validateUpdate } from './index';

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
 *  Route to edit administrator information
 *  @params { adminId, name, gender, date of birth, nationality, contact number, home address, current and permanent address }
 */
router.put('/update/:id', [jwtAuth, checkIfAdmin, validateUpdate()], AdminController.updateInformation);

export = router;
