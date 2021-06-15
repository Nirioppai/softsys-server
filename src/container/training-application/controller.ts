import { Request, Response } from 'express';
// Models
import ApplicationService from './service';
// Utilities
import { sendResponse } from '../../_common/response';

const applicationService = new ApplicationService();
// GET All Training Application
const getAllApplication = async (req: Request, res: Response) => {
    let result: object = await applicationService.applicationGetAll();
    sendResponse(res, result);
};
// GET One Training Application
const getOneApplication = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await applicationService.applicationGetOne(_id);
    sendResponse(res, result);
};
// CREATE One Training Application
const createOneApplication = async (req: Request, res: Response) => {
    let body = req.body;
    let result: object = await applicationService.applicationCreateOne(body);
    sendResponse(res, result);
};
// CREATE One Training Application
const createManyApplication = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await applicationService.applicationCreateMany(body);
    sendResponse(res, result);
};
// UPDATE Training Application
const updateApplication = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let body = req.body;
    let result: object = await applicationService.applicationUpdate(_id, body);
    sendResponse(res, result);
};
// DELETE One Training Application
const deleteOneApplication = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await applicationService.applicationDeleteOne(_id);
    sendResponse(res, result);
};
// DELETE Many Training Applications
const deleteManyApplications = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await applicationService.applicationDeleteMany(body);
    sendResponse(res, result);
};

export default { getAllApplication, getOneApplication, createOneApplication, createManyApplication, updateApplication, deleteOneApplication, deleteManyApplications };
