// dependencies
import jwt from 'jsonwebtoken';
import bscryptjs from 'bcryptjs';
import dotenv from 'dotenv';

// models and services
import { AdminModel } from '../admin/index';

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
        if (isExisting.length > 0) return { success: false, message: 'User already exist', code: 400 };

        // set a default password
        adminInfo.password = await bscryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);

        try {
            const newAdmin = new AdminModel(adminInfo);
            await newAdmin.save();
            return { success: true, data: newAdmin, code: 201, message: 'Account Created Successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to create a new account', deepLog: error, code: 400 };
        }
    }

    async adminLogin(adminInfo: any) {
        // Find if account exists
        let isExisting = await AdminModel.find({ adminId: adminInfo.adminId });

        // Return if does not exists
        if (isExisting.length === 0) return { success: false, message: 'User does not exist', code: 400 };

        // Compare Password
        let admin: any = await AdminModel.findOne({ adminId: adminInfo.adminId });

        let isMatch = await bscryptjs.compare(adminInfo.password, admin.password);

        // Return if password was wrong
        if (!isMatch) return { success: false, message: 'Invalid Credentials', code: 400 };

        try {
            const token = jwt.sign({ adminId: admin.adminId }, process.env.JWT_ACCESS_SECRET || 'helloworld', { expiresIn: process.env.JWT_ACCESS_DURATION });

            return { success: true, data: `Bearer ${token}`, code: 201, message: 'Login Success' };
        } catch (error) {
            return { success: false, message: 'Failed to Login', deepLog: error, code: 400 };
        }
    }
}

export default AuthService;
