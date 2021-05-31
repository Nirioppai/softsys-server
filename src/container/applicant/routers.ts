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
router.get('/get-all', [jwtAuth, checkIfAdmin], ApplicantController.getAllApplicants);

/**
 * Route to create applicant
 * @param { token, type } req
 *
 */
router.get('/get/:id', [jwtAuth, checkIfAdmin], ApplicantController.getOneApplicant);

/**
 * Route to create applicantsss
 * @param { token, type } req
 *
 */
router.post('/create', [jwtAuth, checkIfAdmin], ApplicantController.createApplicant);
