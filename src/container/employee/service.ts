// models
import { EmployeeModel } from './index';
import { EmployeeInformationModel } from '../employeeInformation';
import { AttendanceModel } from '../attendance';
import TrainingApplicationModel from '../training-application/model';

/**
 * Module Admin
 * Admin CRUD service
 * Handles the GET POST PUT DELETE of admin accounts
 */
class EmployeeService {
    constructor() {}

    async getAll() {
        try {
            const employees = await EmployeeModel.find().select('-password');
            return { success: true, data: employees, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get all employee', deepLog: error, code: 400 };
        }
    }
    async getOne(id: string) {
        try {
            const employee = await EmployeeModel.findById(id).select('-password');
            return { success: true, data: employee, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get employee', deepLog: error, code: 400 };
        }
    }
    async updateOne(id: string, information: object) {
        try {
            //check if employee already existing
            const isExisting = await EmployeeModel.findById(id); //employee information id
            if (isExisting === null) return { success: false, message: 'Employee does not exist', code: 400 };

            const updatedEmployee = await EmployeeModel.findOneAndUpdate({ _id: id }, information, { returnOriginal: false });
            return { success: true, data: updatedEmployee, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to update employee information', deepLog: error, code: 400 };
        }
    }

    async deleteOne(_id: string) {
        try {
            const isExisting = await EmployeeModel.findById(_id); //employee id
            if (isExisting === null) return { success: false, message: 'Employee does not exist', code: 400 };
            await EmployeeModel.findByIdAndDelete({ _id });
            await EmployeeInformationModel.findOneAndDelete({ employee: _id });
            await AttendanceModel.findOneAndDelete({ employee: _id });
            await TrainingApplicationModel.findOneAndDelete({ employeeNumber: _id });
            return { success: true, message: 'Employee Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete employee', deepLog: error, code: 400 };
        }
    }
    async deleteMany(userIdsToBeDeleted: Array<String>) {
        try {
            await EmployeeModel.deleteMany({ _id: { $in: userIdsToBeDeleted } });
            await EmployeeInformationModel.deleteMany({ employee: { $in: userIdsToBeDeleted } });
            await AttendanceModel.deleteMany({ employee: { $in: userIdsToBeDeleted } });
            // Note: Find all deletables related to employee and remove them also
            return { success: true, message: 'Employees Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Employees', deeplog: error, code: 400 };
        }
    }
}

export default EmployeeService;
