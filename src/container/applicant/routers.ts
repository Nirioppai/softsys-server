import express from 'express';
import { ApplicantController } from './index';
import { jwtAuth } from '../../_common/check-token';

const router = express.Router();

/**
 *  Applicant API is subjected with /api/admin prefix
 *  Eg. /api/applicant/get-all
 */

/**
 * Route to get all applicants
 * @param { token, type } req
 *
 */
router.get('/get-all', [jwtAuth], ApplicantController.getAllApplicants);

/**
 * Route to create applicant
 * @param { token, type } req
 *
 */
router.get('/get/:id', [jwtAuth], ApplicantController.getOneApplicant);

/**
 * Route to create applicants
 * @param { token, type } req
 *
 */
router.post('/create', ApplicantController.createApplicant);

/**
 * Route to delete one applicant
 * @param { token, type } req
 *
 */
router.delete('/deleteOne/:id', [jwtAuth], ApplicantController.deleteOneApplicant);

/**
 * Route to delete many applicant
 * @param { token, type } req
 *
 */
router.delete('/deleteMany', [jwtAuth], ApplicantController.deleteManyApplicant);

/**
 * Route to update one applicant
 * @param { token, type } req
 *
 */
router.put('/update/:id', [jwtAuth ], ApplicantController.updateOneApplicant);

export = router;
