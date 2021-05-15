import { Request, Response } from 'express';
// services and utilities
import AuthService from './service';

const authService = new AuthService();

// logs a user in
function login(role: String) {
    return async (req: Request, res: Response) => {
        const body: Object = req.body;
        const result: any = await authService.login(body, role);
        if (!result.success) {
            res.status(result.code).send(result.message);
        }

        res.status(200).send(result);
    };
}
// register a user in
function register(role: String) {
    return async function (req: Request, res: Response) {
        const body: Object = req.body;

        const result: any = await authService.register(body, role);
        if (!result.success) {
            return res.status(result.code).send(result);
        }

        res.status(200).send(result);
    };
}
export default { login, register };
