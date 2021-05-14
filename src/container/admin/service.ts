// models
import { AdminModel } from './index';

/**
 * Module Admin
 * Admin CRUD service
 * Handles the GET POST PUT DELETE of admin accounts
 */
class AdminService {
    constructor() {}

    async getAllAdmins() {
        try {
            const admins = await AdminModel.find();
            return { success: true, data: admins, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get admin account', deepLog: error, code: 400 };
        }
    }
}

export default AdminService;
