import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { cleaner } from '../../_common/messages';
import { registerSchema } from '../authentication';

const accountsSchema = Joi.array().items(registerSchema);

export const validateAccounts = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        let accounts = req.body.accounts;
        // this is only for deletion of my exported data from mongoDB Compass
        for (let i in accounts) {
            delete accounts[i]._id;
            delete accounts[i].createdAt;
        }
        const { error } = accountsSchema.validate(accounts, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export const checkDuplicated = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        let accounts = req.body.accounts;

        let valueArr = accounts.map(function (item: any) {
            return item.adminId;
        });

        var sorted_arr = valueArr.slice().sort();
        var duplicates = [];
        for (var i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] === sorted_arr[i]) {
                duplicates.push(sorted_arr[i]);
            }
        }
        if (duplicates) return res.status(400).json({ success: false, message: 'There are duplicated on this set', data: duplicates });

        !duplicates && next();
    };
};
