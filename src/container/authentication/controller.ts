import { Request, Response } from 'express';
// services and utilities
import AuthService from './service';

const authService = new AuthService();

// logs a user in
const login = async (req: Request, res: Response) => {
    const { adminId, password } = req.body;

    const result: any = await authService.adminLogin({ adminId, password });
    if (!result.success) {
        res.status(result.code).send(result.message);
    }

    res.status(200).send(result);
};

// register a user in
const register = async (req: Request, res: Response) => {
    const body: Object = req.body;

    const result: any = await authService.adminRegister(body);
    if (!result.success) {
        return res.status(result.code).send(result);
    }

    res.status(200).send(result);
};

export default { login, register };
