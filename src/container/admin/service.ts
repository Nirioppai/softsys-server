// models
import { AdminModel } from './index';
import { PermissionSchema } from '.././permissions/index';

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
  
    async getOneAdmin(_id: string) {
        // find account from id and check if it exist
        try {
            const isExisting = await this.model.findById({ _id });
            if (isExisting === null) return { success: false, message: 'Account does not exist', code: 400 };
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

    async updatePermissionAndRole(permissionAndRoles: any, _id: string) {
        try {
            // find account from id and check if it exist
            const isExisting = await this.model.findById({ _id });
            if (isExisting === null) return { success: false, message: 'Admin does not exist', code: 400 };
            await this.model.findOneAndUpdate({ _id: _id }, { permissions: permissionAndRoles.permissions, role: permissionAndRoles.role });
            return { success: true, code: 200, message: 'Permission is updated successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to update admin accounts', deepLog: error, code: 400 };
        }
    }
}

export default AdminService;
