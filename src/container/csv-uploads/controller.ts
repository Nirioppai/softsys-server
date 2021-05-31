import { Request, Response } from 'express';
// utilities
import { sendResponse } from '../../_common/response';
import UploadServices from './services';

const uploadServices = new UploadServices();

export const uploadManyAdminAccount = async (req: Request, res: Response) => {
    let result: object = await uploadServices.uploadManyAdminAccounts();
    sendResponse(res, result);
};
