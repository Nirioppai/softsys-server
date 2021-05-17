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

const getOneAdmin = async (req: Request, res: Response) => {
    let result: object = await adminService.getOneAdmin(req.params.id);
    sendResponse(res, result);
};

const updateInformation = async (req: Request, res: Response) => {
    /**
     * Takes in an Object
     *  @param { request body -> see Admin Model for full description}
     */
    let result: object = await adminService.updateInformation(req.body, req.params.id);
    sendResponse(res, result);
};

export default { getAllAdmin, updateInformation, getOneAdmin };
