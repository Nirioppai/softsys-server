import { Request, Response } from 'express';
// models
import RoleService from './service';
// utilities
import { sendResponse } from '../../_common/response';

const roleService = new RoleService();

// GET All Role
const getAllRoles = async (req: Request, res: Response) => {
    let result: object = await roleService.getAllRoles();
    sendResponse(res, result);
};
// GET One Role
const getOneRole = async (req: Request, res: Response) => {
    const _id: string = req.params.id;
    let result: object = await roleService.getOneRole(_id);
    sendResponse(res, result);
};

const createRole = async (req: Request, res: Response) => {
    const body = req.body;
    let result: object = await roleService.createNewRole(body);
    sendResponse(res, result);
};

export default { getAllRoles, getOneRole, createRole };
