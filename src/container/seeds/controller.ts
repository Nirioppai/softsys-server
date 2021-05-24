import { Request, Response } from 'express';
// services and utilities
import AdminSeed from './adminSeed';
import EmployeeSeed from './employeeSeed';
import PermissionSeed from './permissionSeed';
import SuperAdminSeed from './superAdminSeed';

// register a user in
const adminSeed = async (req: Request, res: Response) => {
    const result: any = await AdminSeed();
    res.status(200).send(result);
};
const employeeSeed = async (req: Request, res: Response) => {
    const result: any = await EmployeeSeed();
    res.status(200).send(result);
};

const permissionSeed = async (req: Request, res: Response) => {
    const result: any = await PermissionSeed();
    res.status(200).send(result);
};

const superAdminSeed = async (req: Request, res: Response) => {
    const result: any = await SuperAdminSeed();
    res.status(200).send(result);
};

const seedAll = async (req: Request, res: Response) => {
    await AdminSeed();
    await EmployeeSeed();
    await PermissionSeed();
    await SuperAdminSeed();
    res.status(200).send({ success: true, message: 'All data has been successfully seeded . . . ' });
};

export { adminSeed, employeeSeed, permissionSeed, seedAll, superAdminSeed };
