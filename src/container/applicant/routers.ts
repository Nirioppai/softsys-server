import express from 'express';
import { ApplicantController } from './index';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';
import { validateApplicant } from './validate';

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
router.post('/create', [jwtAuth, validateApplicant()], ApplicantController.createApplicant);

export = router;
