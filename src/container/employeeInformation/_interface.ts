import { Document } from 'mongoose';
export default interface IEmployee extends Document {
    employment: {
        classification: String;
        tenureShip: String;
    };
    employmentHistory: {
        employmentStart: Date;
        employmentEnd: Date;
        contractStart: Date;
        contractEnd: Date;
        probationStart: Date;
        probationEnd: Date;
        regularizationStart: Date;
        regularizationEnd: Date;
    };
    department: {
        departmentId: String;
        unit: String;
        departmentName: String;
        office: String;
    };
    governmentIssuedNumbers: {
        sss: String;
        gsis: String;
        tin: String;
        philhealth: String;
        pagibig: String;
        universalId: String;
        dln: String;
        prc: String;
    };
    immediateSuperior: String;
    civilStatus: String;
    emailAddresses: {
        email1: String;
        email2: String;
    };
    religion: String;
    nationality: String;
}
