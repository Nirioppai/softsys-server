import express from 'express';
import { ApplicantInfoController, validateApplicantInfo } from './index';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

const router = express.Router();

/**
 *  Applicant Info API is subjected with /api/applicantInformation prefix
 *  Eg. /api/applicantInformation/get-all
 */

/**
 * Route to GET All Applicant Information
 * @param { token, type } req
 *
 */
router.get('/get-all', [jwtAuth, checkIfAdmin], ApplicantInfoController.getAllAdminInfo);

/**
 * Route to GET One Applicant Information
 * @param { token, type } req
 *
 */
router.get('/get/:id', [jwtAuth, checkIfAdmin, validateApplicantInfo], ApplicantInfoController.getOneAdminInfo);

/**
 * Route to Create Applicant Info
 * @param { token, type } req
 *
 */
router.post('/create', [jwtAuth, checkIfAdmin], ApplicantInfoController.createAdminInfo);

export = router;
