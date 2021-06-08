// dependencies
import jwt from 'jsonwebtoken';
import bscryptjs from 'bcryptjs';
import dotenv from 'dotenv';

// models and services
import { AdminModel } from '../admin/index';
import { EmployeeModel } from '../employee/index';

dotenv.config();
/**
 * Module Auth
 * Authentication/Authorization service
 * Handles the authentication, registration and authorization of users
 * Changing passwords, restricting/providing access
 */
class AuthService {
    model: any;
    constructor() {
        this.model = EmployeeModel;
    }

    /**
     * Set current model
     * @param {string} type Model type
     */
    setModel(role: String) {
        if (role === 'admin') {
            this.model = AdminModel;
        } else if (role === 'employee') {
            this.model = EmployeeModel;
        }
    }
    async register(userInfo: any, role: String) {
        // define the model to be used
        this.setModel(role);
        // find for duplicate account
        let isExisting = '';
        if (role === 'admin') {
            isExisting = await this.model.find({ adminId: userInfo.adminId });
        } else if (role === 'employee') {
            isExisting = await this.model.find({ employeeId: userInfo.employeeId });
        }

        // return if there is a duplicate
        if (isExisting.length > 0) return { success: false, message: 'Account already exist', code: 400 };

        // set a default password
        userInfo.password = await bscryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);

        try {
            const newUser = new this.model(userInfo);
            await newUser.save();
            return { success: true, data: userInfo, code: 201, message: 'Account Created Successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to create a new account', deepLog: error, code: 400 };
        }
    }

    async login(userInfo: any, role: String) {
        // define the model to be used
        this.setModel(role);
        // Find if account exists
        let isExisting = '';
        if (role === 'admin') {
            isExisting = await this.model.find({ adminId: userInfo.adminId });
        } else if (role === 'employee') {
            isExisting = await this.model.find({ employeeId: userInfo.employeeId });
        }

        // Return if does not exists
        if (isExisting.length === 0) return { success: false, message: 'User does not exist', code: 400 };

        // Compare Password
        let user: any;
        let isMatch = null;
        if (role === 'admin') {
            user = await this.model.findOne({ adminId: userInfo.adminId });
            isMatch = await bscryptjs.compare(userInfo.password, user.password);
        } else if (role === 'employee') {
            user = await this.model.findOne({ employeeId: userInfo.employeeId });
            isMatch = await bscryptjs.compare(userInfo.password, user.password);
        }

        // Return if password was wrong
        if (!isMatch) return { success: false, message: 'Invalid Credentials', code: 400 };

        try {
            let userObject: object;
            if (role === 'admin') {
                userObject = {
                    _id: user._id,
                    adminId: user.adminId,
                    type: user.type,
                    role: user.role,
                    permissions: user.permissions
                };
            } else if (role === 'employee') {
                userObject = {
                    _id: user._id,
                    employeeId: user.employeeId,
                    type: user.type,
                    role: user.role,
                    permissions: user.permissions
                };
            } else {
                userObject = [{}];
            }
            const token = jwt.sign(userObject, process.env.JWT_ACCESS_SECRET || 'hello world', { expiresIn: process.env.JWT_ACCESS_DURATION || '7d' });

            return { success: true, data: `Bearer ${token}`, code: 201, message: 'Login Success' };
        } catch (error) {
            return { success: false, message: 'Failed to Login', deepLog: error, code: 400 };
        }
    }
}

export default AuthService;
