import { AdminModel } from '../admin';

class UploadServices {
    model: any;
    constructor() {
        this.model = AdminModel;
    }

    async uploadManyAdminAccounts(accounts: Array<Object>) {
        return { success: true, data: [], message: 'Admin accounts successfully uploaded' };
    }
}

export default UploadServices;
