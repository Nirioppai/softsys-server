import { Request, Response } from 'express';
// models
import EmployeeService from './service';
// utilities
import { sendResponse } from '../../_common/response';

const employeeService = new EmployeeService();
// get all admin accounts
const getAllEmployee = async (req: Request, res: Response) => {
    let result: object = await employeeService.getAllEmployees();
    sendResponse(res, result);
};

export default { getAllEmployee };
