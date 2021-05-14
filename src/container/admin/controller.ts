import { Request, Response } from 'express';
// models
import AdminService from './service';

const adminService = new AdminService();
// get all admin accounts
const getAllAdmin = async (req: Request, res: Response) => {
    try {
        let result: object = await adminService.getAllAdmins();
        res.status(200).send(result);
    } catch (error) {
        return res.status(400).send({ success: false, message: 'Failed to get admin accounts', deepLog: error });
    }
};

export default { getAllAdmin };
