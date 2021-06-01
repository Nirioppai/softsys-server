import { Request, Response } from 'express';
// Service
import ApplicantInfoService from './service';
// Utilities
import { sendResponse } from '../../_common/response';

const applicantInfoService = new ApplicantInfoService();

// GET All Applicant Info
const getAllAdminInfo = async (req: Request, res: Response) => {
    let result: object = await applicantInfoService.applicantInfoGetAll();
    sendResponse(res, result);
};
// GET One Applicant Info
const getOneAdminInfo = async (req: Request, res: Response) => {
    let _id: string = req.params.id;
    let result: object = await applicantInfoService.applicantInfoGetOne(_id);
    sendResponse(res, result);
};
// Create Applicant Info
const createAdminInfo = async (req: Request, res: Response) => {
    let body: any = req.body;
    let result: object = await applicantInfoService.applicantInfoCreate(body);
    sendResponse(res, result);
};

export default { getAllAdminInfo, getOneAdminInfo, createAdminInfo };
