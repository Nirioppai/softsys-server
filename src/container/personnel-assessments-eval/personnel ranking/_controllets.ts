import { Request, Response } from 'express';
// models
import PersonnelRankingServices from './_services';
// utilities
import { sendResponse } from '../../../_common/response';

const personnelRankingService = new PersonnelRankingServices();

const getAll = async (req: Request, res: Response) => {
    let result: object = await personnelRankingService.getAll();
    sendResponse(res, result);
};

const getOne = async (req: Request, res: Response) => {
    let result: object = await personnelRankingService.getOne(req.params.id);
    sendResponse(res, result);
};

// create one org chart
const createOne = async (req: Request, res: Response) => {
    let result: object = await personnelRankingService.createOne(req.body);
    sendResponse(res, result);
};

const updateOne = async (req: Request, res: Response) => {
    let results: object = await personnelRankingService.updateOne(req.body, req.params.id);
    sendResponse(res, results);
};

const deleteOne = async (req: Request, res: Response) => {
    let results: object = await personnelRankingService.deleteOne(req.params.id);
    sendResponse(res, results);
};

const deleteMany = async (req: Request, res: Response) => {
    let results: object = await personnelRankingService.deleteMany(req.body.ids);
    sendResponse(res, results);
};

export default { createOne, getAll, getOne, updateOne, deleteMany, deleteOne };
