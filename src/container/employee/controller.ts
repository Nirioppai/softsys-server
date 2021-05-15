import { Request, Response } from 'express';
// models
import EmployeeService from './service';

const employeeService = new EmployeeService();
// get all admin accounts
const getAllEmployee = async (req: Request, res: Response) => {
    try {
        let result: object = await employeeService.getAllEmployees();
        res.status(200).send(result);
    } catch (error) {
        return res.status(400).send({ success: false, message: 'Failed to get employee accounts', deepLog: error });
    }
};

export default { getAllEmployee };
