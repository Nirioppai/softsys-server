// models
import { EmployeeInformationModel } from './index';

class EmployeeInformationService {
    constructor() {}

    async getAllEmployeeInformations() {
        try {
            const employeesInformation = await EmployeeInformationModel.find();
            return { success: true, data: employeesInformation, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get all employee information', deepLog: error, code: 400 };
        }
    }
    async getEmployeeInformations(id: string) {
        try {
            const employeeInformation = await EmployeeInformationModel.findById(id);
            return { success: true, data: employeeInformation, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get employee information', deepLog: error, code: 400 };
        }
    }
    async addEmployeeInformations(information: object) {
        try {
            const employeeInformation = new EmployeeInformationModel(information);
            await employeeInformation.save();
            return { success: true, data: employeeInformation, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to add employee information', deepLog: error, code: 400 };
        }
    }
    async updateEmployeeInformations(id: string, information: object) {
        try {
            const employeeInformation = await EmployeeInformationModel.findOneAndUpdate({ _id: id }, information, { new: true });

            return { success: true, data: employeeInformation, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to update employee information', deepLog: error, code: 400 };
        }
    }

    async deleteEmployeeInformations(id: string) {
        try {
            const employeeInformation = await EmployeeInformationModel.findOneAndDelete({ _id: id });
            return { success: true, data: employeeInformation, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get employees information', deepLog: error, code: 400 };
        }
    }
}

export default EmployeeInformationService;
