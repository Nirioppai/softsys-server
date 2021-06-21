import express from 'express';
import { TrainingProgramController, validateCreate, validateUpdate } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();

/**
 *  Training-program API is subjected with /api/training-program prefix
 *  Eg. /api/training-program/get-all
 */

/**
 * Route to GET All Training Program Application
 * @param { token, type } req
 *
 */
router.get('/', [jwtAuth], TrainingProgramController.getAll);

/**
 * Route to GET All Training Program
 * @param { token, type } req
 *
 */
router.get('/:id', [jwtAuth], TrainingProgramController.getOne);

/**
 * Route to CREATE One Training Program
 * @param { token, type } req
 *
 */
router.post('/', [jwtAuth], TrainingProgramController.createOne);

/**
 * Route to CREATE Many Training programs
 * @param { token, type } req
 *
 */
router.post('/many', [jwtAuth], TrainingProgramController.createMany);

/**
 * Route to UPDATE One Training program
 * @param { token, type } req
 *
 */
router.put('/:id', [jwtAuth], TrainingProgramController.updateOne);

/**
 * Route to DELETE One Training program
 * @param { token, type } req
 *
 */
router.delete('/:id', [jwtAuth], TrainingProgramController.deleteOne);

/**
 * Route to DELETE Many Training program
 * @param { token, type } req
 *
 */
router.delete('/many', [jwtAuth], TrainingProgramController.deleteMany);

export = router;
