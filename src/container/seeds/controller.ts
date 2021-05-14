import { Request, Response } from 'express';
// services and utilities
import AdminSeed from './adminSeed';

// register a user in
const adminSeed = async (req: Request, res: Response) => {
    const result: any = await AdminSeed();

    if (!result.success) {
        res.status(400).send({ success: false, message: 'Failed to seed admin data' });
    }

    res.status(200).send(result);
};

const seedAll = async (req: Request, res: Response) => {
    await AdminSeed();

    res.status(200).send({ success: true, message: 'All data has been successfully seeded . . . ' });
};

export { adminSeed, seedAll };
