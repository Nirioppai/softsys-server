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

    async adminDelete(_id: string) {
        // Check if Admin Exists
        let isExisting = await this.model.findById({ _id });
        // Return if does not Exist
        if (isExisting === null) return { success: false, message: 'Admin does not exist', code: 400 };

        try {
            // Delete Admin
            await this.model.deleteOne({ _id });

            return { success: true, message: 'Admin Deleted ', code: 201 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Admin', deepLog: error, code: 400 };
        }
    }

    async getAllPermission(_id: string) {
        try {
            // GETS All Permissions
            let adminPermissions: any = await this.model.findById({ _id });
            // If Admin has no permissions
            if (adminPermissions.permissions.length === 0) return { success: true, data: [], message: 'This Admin has No Permissions', code: 200 };

            let permissionList: any = [];

            for (let i = 0; i < adminPermissions.permissions.length; i++) {
                let item: any = await PermissionSchema.findById({ _id: adminPermissions.permissions[i] }, { name: 1, description: 1 });
                permissionList.push(item);
            }

            return { success: true, data: permissionList, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Admin Permissions', deepLog: error, code: 400 };
        }
    }

    async getOnePermissions(_id: string, permission: string) {
        // Check if Admin exist
        let adminIsExisting = await this.model.findById({ _id });
        // Return if Admin does not exist
        if (adminIsExisting === null) return { success: false, message: 'Admin does not exist', code: 400 };
        // Check if Permission exist
        let isExisting = await PermissionSchema.findById({ _id: permission });
        // Return if Permission does not exist
        if (isExisting === null) return { success: false, message: 'Permission does not exist', code: 400 };

        try {
            // If Admin has no permissions
            if (adminIsExisting.permissions.length === 0) return { success: true, data: [], message: 'This Admin has No Permissions', code: 200 };

            // GET Selected Permission
            let adminPermissions: any = await this.model.findById({ _id });

            let permissionItem: any = '';

            for (let i = 0; i < adminPermissions.permissions.length; i++) {
                let item: any = await PermissionSchema.findById({ _id: adminPermissions.permissions[i] }, { name: 1, description: 1 });

                if (permission == item._id) {
                    permissionItem = item;
                    break;
                }

                if (i === adminPermissions.permissions.length - 1) return { success: true, data: [], message: 'Permission Not Found', code: 200 };
            }

            return { success: true, data: permissionItem, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET Admin Permission', deepLog: error, code: 400 };
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
