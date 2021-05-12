// dependencies
import jwt from 'jsonwebtoken';
import bscryptjs from 'bcryptjs';
import dotenv from 'dotenv';

// models and services
import { AdminModel } from '../admin/index';
import { ExistsError, LogicError } from '../../_errors';

dotenv.config();
/**
 * Module Auth
 * Authentication/Authorization service
 * Handles the authentication, registration and authorization of users
 * Changing passwords, restricting/providing access
 */
class AuthService {
    constructor() {}

    async adminRegister(adminInfo: any) {
        // find for duplicate account
        let isExisting = await AdminModel.find({ adminId: adminInfo.adminId });

        // return if there is a duplicate
        if (isExisting.length > 0) return { success: false, message: new ExistsError('User'), code: 400 };

        // set a default password
        adminInfo.password = await bscryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);

        try {
            const newAdmin = new AdminModel(adminInfo);

            await newAdmin.save();

            return { success: true, data: newAdmin, code: 201, message: 'Account Created Successfully' };
        } catch (error) {
            return { success: false, message: new LogicError('Failed to create account'), deepLog: error, code: 400 };
        }
    }
}

export default AuthService;
