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
// DELETE Admin
const deleteAdmin = async (req: Request, res: Response) => {
    const _id: string = req.params.id;
    let result: object = await adminService.adminDelete(_id);
    sendResponse(res, result);
};

const deleteManyAdmin = async (req: Request, res: Response) => {
    let result: object = await adminService.deleteManyAdmin(req.body.ids);
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

const updatePermissionAndRole = async (req: Request, res: Response) => {
    /**
     * Takes in an Object
     *  @param { request body -> see Admin Model for full description}
     */
    let result: object = await adminService.updatePermissionAndRole(req.body, req.params.id);
    sendResponse(res, result);
};

const getAllPermissions = async (req: Request, res: Response) => {
    /**
     * Takes in an Object
     *  @param { request body -> see Admin Model for full description}
     */
    const _id = req.params.id;
    let result: object = await adminService.getAllPermission(_id);
    sendResponse(res, result);
};

const getOnePermission = async (req: Request, res: Response) => {
    /**
     * Takes in an Object
     *  @param { request body -> see Admin Model for full description}
     */
    let result: object = await adminService.getOnePermissions(req.params.id, req.params.permission);
    sendResponse(res, result);
};

export default { getAllAdmin, updateInformation, getOneAdmin, updatePermissionAndRole, deleteAdmin, getAllPermissions, getOnePermission, deleteManyAdmin };
