import { Request, Response } from 'express';
// Service
import ApplicantService from './service';
// Utilities
import { sendResponse } from '../../_common/response';

const applicantService = new ApplicantService();
// Get All Applicants
const getAllApplicants = async (req: Request, res: Response) => {
    let result: object = await applicantService.getAllApplicant();
    sendResponse(res, result);
};
// Create Applicant
const createApplicant = async (req: Request, res: Response) => {
    let body: any = req.body;
    let result: object = await applicantService.applicantCreate(body);
    sendResponse(res, result);
};
// Get One Applicant
const getOneApplicant = async (req: Request, res: Response) => {
    let _id: string = req.params.id;
    let result: object = await applicantService.getOneApplicant(_id);
    sendResponse(res, result);
};

export default { getAllApplicants, createApplicant, getOneApplicant };
