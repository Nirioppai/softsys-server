import { Request, Response } from 'express';
// Models
import TrainingProgramService from './service';
// Utilities
import { sendResponse } from '../../_common/response';

const trainingProgramService = new TrainingProgramService();
// GET One Training Program
const getOne = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await trainingProgramService.getOne(_id);
    sendResponse(res, result);
};
// GET All Training Program
const getAll = async (req: Request, res: Response) => {
    let result: object = await trainingProgramService.getAll();
    sendResponse(res, result);
};
// CREATE One Training Program
const createOne = async (req: Request, res: Response) => {
    let body = req.body;
    let result: object = await trainingProgramService.createOne(body);
    sendResponse(res, result);
};
// CREATE One Training Program
const createMany = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await trainingProgramService.createMany(body);
    sendResponse(res, result);
};
// UPDATE Training Program
const updateOne = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let body = req.body;
    let result: object = await trainingProgramService.updateOne(_id, body);
    sendResponse(res, result);
};
// DELETE One Training Program
const deleteOne = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await trainingProgramService.deleteOne(_id);
    sendResponse(res, result);
};
// DELETE Many Training Program
const deleteMany = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await trainingProgramService.deleteMany(body);
    sendResponse(res, result);
};

export default { getAll, getOne, createOne, createMany, updateOne, deleteOne, deleteMany };
