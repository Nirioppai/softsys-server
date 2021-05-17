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
    const adminId: string = req.params.adminId;
    let result: object = await adminService.adminDelete(adminId);
    sendResponse(res, result);
};
// GET All Permissions
const getAllPermission = async (req: Request, res: Response) => {
    let result: object = await adminService.getAllPermissions();
    sendResponse(res, result);
};
// GET One Permissions
const getOnePermission = async (req: Request, res: Response) => {
    const permission: string = req.params.permission;
    let result: object = await adminService.getOnePermissions(permission);
    sendResponse(res, result);
};

export default { getAllAdmin, deleteAdmin, getAllPermission, getOnePermission };
