// models
import { AdminModel } from './index';
import { PermissionSchema } from '.././permissions/index';

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

    async adminDelete(adminId: string) {
        // Check if Admin Exists
        let isExisting = await AdminModel.find({ adminId });
        // Return if does not Exist
        if (isExisting.length === 0) return { success: false, message: 'Admin does not exist', code: 400 };

        try {
            // Delete Admin
            await AdminModel.deleteOne({ adminId });

            return { success: true, message: 'Admin Deleted ', code: 201 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Admin', deepLog: error, code: 400 };
        }
    }

    async getAllPermissions() {
        try {
            // GETS All Permissions
            const permissions = await PermissionSchema.find();
            return { success: true, data: permissions, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Permissions', deepLog: error, code: 400 };
        }
    }

    async getOnePermissions(permission: string) {
        // Check if Permission exist
        let isExisting = await PermissionSchema.find({ name: permission });
        // Return if Permission does not exist
        if (isExisting.length === 0) return { success: false, message: 'Permission does not exist', code: 400 };

        try {
            // GET Selected Permission
            const getPermission = await PermissionSchema.find({ name: permission });
            return { success: true, data: getPermission, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get admin account', deepLog: error, code: 400 };
        }
    }
}

export default AdminService;
