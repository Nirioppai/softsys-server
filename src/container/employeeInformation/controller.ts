import { Request, Response } from 'express';
// models
import { EmployeeInformationService } from '../employeeInformation/index';

// get all admin accounts
const getAllEmployeeInformation = async (req: Request, res: Response) => {
    let result: Object = {};

    try {
    } catch (error) {}

    res.status(200).send(result);
};

export default { getAllEmployeeInformation };
