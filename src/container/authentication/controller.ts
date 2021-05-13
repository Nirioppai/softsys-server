import { Request, Response } from 'express';
// services and utilities
import AuthService from './service';

const authService = new AuthService();

// logs a user in
const login = async (req: Request, res: Response) => {
    const { adminId, password } = req.body;
    res.status(200).send({});
};

// register a user in
const register = async (req: Request, res: Response) => {
    const body: Object = req.body;

    const result: any = await authService.adminRegister(body);
    if (!result.success) {
        res.status(result.code).send(result.message);
    }

    res.status(200).send(result);
};

export default { login, register };
