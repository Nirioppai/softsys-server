import { Request, Response } from 'express';
// models
import OrganizationChartServices from './_services';
// utilities
import { sendResponse } from '../../_common/response';

const employeeService = new OrganizationChartServices();

const getAll = async (req: Request, res: Response) => {
    let result: object = await employeeService.getAllOrgChart();
    sendResponse(res, result);
};

// create one org chart
const createOne = async (req: Request, res: Response) => {
    let result: object = await employeeService.createOneOrgchart(req.body);
    sendResponse(res, result);
};

export default { createOne, getAll };
