import express from 'express';
import { ApplicationController, validateCreate, validateUpdate } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Application-Training API is subjected with /api/application prefix
 *  Eg. /api/application/get-all
 */

/**
 * Route to GET All Training Application
 * @param { token, type } req
 *
 */
router.get('/get-all', [jwtAuth], ApplicationController.getAllApplication);

/**
 * Route to GET All Training Application
 * @param { token, type } req
 *
 */
router.get('/get/:id', [jwtAuth], ApplicationController.getOneApplication);

/**
 * Route to CREATE One Training Application
 * @param { token, type } req
 *
 */
router.post('/createOne', [jwtAuth], ApplicationController.createOneApplication);

/**
 * Route to CREATE Many Training Applications
 * @param { token, type } req
 *
 */
router.post('/createMany', [jwtAuth], ApplicationController.createManyApplication);

/**
 * Route to UPDATE One Training Application
 * @param { token, type } req
 *
 */
router.put('/update/:id', [jwtAuth], ApplicationController.updateApplication);

/**
 * Route to DELETE One Training Application
 * @param { token, type } req
 *
 */
router.delete('/deleteOne/:id', [jwtAuth], ApplicationController.deleteOneApplication);

/**
 * Route to DELETE Many Training Application
 * @param { token, type } req
 *
 */
router.delete('/deleteMany', [jwtAuth], ApplicationController.deleteManyApplications);

export = router;
