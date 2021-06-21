import { Request, Response } from 'express';
// utilities
import { sendResponse } from '../../_common/response';
import UploadServices from './services';

const uploadServices = new UploadServices();

export const uploadManyAdminAccount = async (req: Request, res: Response) => {
    let accounts: Array<Object> = req.body.accounts;
    let result: object = await uploadServices.uploadManyAdminAccounts(accounts);
    sendResponse(res, result);
};

export const uploadManyEmployeeAccount = async (req: Request, res: Response) => {
    let accounts: Array<Object> = req.body.accounts;
    let result: object = await uploadServices.uploadManyEmployeeAccounts(accounts);
    sendResponse(res, result);
};
