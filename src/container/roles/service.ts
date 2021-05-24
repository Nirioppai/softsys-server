// models
import { RoleSchema, IRole } from './index';
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

    async createNewRole(body: IRole) {
        let isExistingByName = await RoleSchema.find({ name: body.name });

        if (isExistingByName.length > 0) {
            return { success: false, message: 'This role already exist', code: 409 };
        }

        try {
            const data = new RoleSchema(body);
            await data.save();
            return { success: true, data: data, message: 'Role created successfully', code: 200 };
        } catch (error) {
            return { success: true, message: 'Failed to create role', deeplog: error, code: 400 };
        }
    }

    async updateRole(_id: string, body: IRole) {
        let isExistingByName = await RoleSchema.findById({ _id });

        if (isExistingByName === null) {
            return { success: false, message: 'This role does not exist', code: 404 };
        }

        try {
            await RoleSchema.findByIdAndUpdate({ _id }, body);
            return { success: true, message: 'Role updated successfully', code: 200 };
        } catch (error) {
            return { success: true, message: 'Failed to update role', deeplog: error, code: 400 };
        }
    }

    async deleteRole(_id: string) {
        let isExistingById = await RoleSchema.findById({ _id });
        if (isExistingById === null) {
            return { success: false, message: 'This role does not exist', code: 404 };
        }

        try {
            await RoleSchema.findByIdAndDelete({ _id });
            return { success: true, message: 'Role deleted successfully', code: 200 };
        } catch (error) {
            return { success: true, message: 'Failed to delete role', deeplog: error, code: 400 };
        }
    }
}

export default RoleService;
