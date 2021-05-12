import { Request, Response } from 'express';
// models
import { AdminService } from '../admin/index';

// get all admin accounts
const getAllAdmin = async (req: Request, res: Response) => {
    let result: Object = {};

    try {
    } catch (error) {}

    res.status(200).send(result);
};

export default { getAllAdmin };
