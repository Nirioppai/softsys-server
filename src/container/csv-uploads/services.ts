import { AdminModel } from '../admin';

class UploadServices {
    model: any;
    constructor() {
        this.model = AdminModel;
    }

    async uploadManyAdminAccounts() {
        return { success: true, data: [], message: 'Admin accounts successfully uploaded' };
    }
}

export default UploadServices;
