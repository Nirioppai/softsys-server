// models
import { EmployeeModel } from './index';

/**
 * Module Admin
 * Admin CRUD service
 * Handles the GET POST PUT DELETE of admin accounts
 */
class EmployeeService {
    constructor() {}

    async getAllEmployees() {
        try {
            const employees = await EmployeeModel.find();
            return { success: true, data: employees, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get employee accounts', deepLog: error, code: 400 };
        }
    }
}

export default EmployeeService;
