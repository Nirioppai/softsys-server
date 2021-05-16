import { Request, Response } from 'express';
// services and utilities
import AuthService from './service';
import { sendResponse } from '../../_common/response';

const authService = new AuthService();

// logs a user in
function login(role: String) {
    return async (req: Request, res: Response) => {
        const body: Object = req.body;
        const result: any = await authService.login(body, role);

        sendResponse(res, result);
    };
}
// register a user in
function register(role: String) {
    return async function (req: Request, res: Response) {
        const body: Object = req.body;
        const result: any = await authService.register(body, role);

        sendResponse(res, result);
    };
}
export default { login, register };
