// Models
import { ApplicationModel } from './index';

/**
 * Module Training Application
 * Training Application CRUD service
 * Handles the GET POST PUT DELETE of training application accounts
 */
class ApplicantService {
    constructor() {}

    async applicationGetAll() {
        try {
            return { successs: true, data: [], code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get All Training Applications', deeplog: error, code: 400 };
        }
    }
}

export default ApplicantService;
