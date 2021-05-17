// models
import { AdminModel } from './index';

/**
 * Module Admin
 * Admin CRUD service
 * Handles the GET POST PUT DELETE of admin accounts
 */
class AdminService {
    model: any;
    constructor() {
        this.model = AdminModel;
    }

    async getAllAdmins() {
        try {
            const admins = await this.model.find();
            return { success: true, data: admins, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get admin account', deepLog: error, code: 400 };
        }
    }

    async getOneAdmin(_id: string) {
        // find account from id and check if it exist
        try {
            const isExisting = await this.model.findById({ _id });
            if (isExisting === null) return { success: false, message: 'Profile does not exist', code: 400 };
            return { success: true, data: isExisting, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get admin account', deepLog: error, code: 400 };
        }
    }

    async updateInformation(adminInfo: object, _id: string) {
        try {
            // find account from id and check if it exist
            const isExisting = await this.model.findById({ _id });
            if (isExisting === null) return { success: false, message: 'Profile does not exist', code: 400 };

            await this.model.findOneAndUpdate({ _id: _id }, adminInfo);

            return { success: true, code: 200, message: 'Profile information is updated successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to update admin accounts', deepLog: error, code: 400 };
        }
    }
}

export default AdminService;
