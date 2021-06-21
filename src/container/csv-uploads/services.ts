import { AdminModel } from '../admin';
import { EmployeeModel } from '../employee';
import bscryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();
class UploadServices {
    model: any;
    constructor() {
        this.model = AdminModel;
    }

    async uploadManyAdminAccounts(accounts: Array<any>) {
        const password = await bscryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);
        let newAccounts = [];

        for (let i in accounts) {
            const admin = new AdminModel({ ...accounts[i], password: password });
            newAccounts.push(admin);
        }

        try {
            await AdminModel.insertMany(newAccounts);
            return { success: true, message: 'Admin accounts successfully uploaded', code: 200 };
        } catch (error) {
            return { success: false, code: 400, message: 'Failed to upload admin accounts', deepLog: error };
        }
    }

    async uploadManyEmployeeAccounts(accounts: Array<any>) {
        const password = await bscryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);
        let newAccounts = [];

        for (let i in accounts) {
            const employee = new EmployeeModel({ ...accounts[i], password: password });
            newAccounts.push(employee);
        }

        try {
            await EmployeeModel.insertMany(newAccounts);
            return { success: true, message: 'Employee accounts successfully uploaded', code: 200 };
        } catch (error) {
            return { success: false, code: 400, message: 'Failed to upload employee accounts', deepLog: error };
        }
    }
}

export default UploadServices;
