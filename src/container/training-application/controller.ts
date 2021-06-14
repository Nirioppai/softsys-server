import { Request, Response } from 'express';
// Models
import ApplicationService from './service';
// Utilities
import { sendResponse } from '../../_common/response';

const applicationService = new ApplicationService();
// GET All Training Application
const getAllApplication = async (req: Request, res: Response) => {
    let result: object = await applicationService.applicationGetAll();
    sendResponse(res, result);
};

export default { getAllApplication };
