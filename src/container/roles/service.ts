// models
import { RoleSchema } from './index';

/**
 * Module Role
 * Role service
 *
 */
class RoleService {
    constructor() {}

    async getAllRoles() {
        try {
            // GETS All Permissions
            const permissions = await RoleSchema.find({}, { name: 1, description: 1 });
            return { success: true, data: permissions, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get all role', deepLog: error, code: 400 };
        }
    }

    async getOneRole(_id: string) {
        // Check if Permission exist
        let isExisting = await RoleSchema.findById({ _id });
        // Return if Permission does not exist
        if (isExisting === null) return { success: false, message: 'Role does not exist', code: 400 };

        try {
            // GET Selected Permission
            let getPermission: any = await RoleSchema.findById({ _id }, { name: 1, description: 1 });

            return { success: true, data: getPermission, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get Role', deepLog: error, code: 400 };
        }
    }

    async createNewRole(body: object) {
        return { success: true, data: [], code: 200 };
    }
}

export default RoleService;
