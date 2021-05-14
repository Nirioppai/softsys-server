import { Request, Response } from 'express';
// services and utilities
import AdminSeed from './adminSeed';
import PermissionSeed from './permissionSeed';

// register a user in
const adminSeed = async (req: Request, res: Response) => {
    const result: any = await AdminSeed();
    res.status(200).send(result);
};

const permissionSeed = async (req: Request, res: Response) => {
    const result: any = await PermissionSeed();
    res.status(200).send(result);
};

const seedAll = async (req: Request, res: Response) => {
    await AdminSeed();
    await PermissionSeed();

    res.status(200).send({ success: true, message: 'All data has been successfully seeded . . . ' });
};

export { adminSeed, permissionSeed, seedAll };
