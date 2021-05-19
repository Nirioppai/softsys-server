import { Request, Response } from 'express';
// models
import PermissionService from './service';
// utilities
import { sendResponse } from '../../_common/response';

const permissionService = new PermissionService();

// GET All Permissions
const getAllPermission = async (req: Request, res: Response) => {
    let result: object = await permissionService.getAllPermissions();
    sendResponse(res, result);
};
// GET One Permissions
const getOnePermission = async (req: Request, res: Response) => {
    const _id: string = req.params.id;
    let result: object = await permissionService.getOnePermissions(_id);
    sendResponse(res, result);
};

export default { getAllPermission, getOnePermission };
