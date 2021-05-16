import { Request, Response } from 'express';
// models
import AdminService from './service';
// utilities
import { sendResponse } from '../../_common/response';

const adminService = new AdminService();
// get all admin accounts
const getAllAdmin = async (req: Request, res: Response) => {
    let result: object = await adminService.getAllAdmins();
    sendResponse(res, result);
};

export default { getAllAdmin };
