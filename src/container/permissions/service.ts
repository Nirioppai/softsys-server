// models
import { PermissionSchema } from './index';

/**
 * Module Permission
 * Permission service
 *
 */
class PermissionService {
    constructor() {}

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

export default PermissionService;
