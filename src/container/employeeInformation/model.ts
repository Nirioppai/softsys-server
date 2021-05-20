import mongoose, { Schema } from 'mongoose';
import IEmployeeInformation from './_interface';

const EmployeeInformationSchema: Schema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    employment: {
        classification: {
            type: String
        },
        tenureShip: {
            type: String
        }
    },
    employmentHistory: {
        employmentStart: {
            type: Date
        },
        employmentEnd: {
            type: Date
        },
        contractStart: {
            type: Date
        },
        contractEnd: {
            type: Date
        },
        probationStart: {
            type: Date
        },
        probationEnd: {
            type: Date
        },
        regularizationStart: {
            type: Date
        },
        regularizationEnd: {
            type: Date
        }
    },
    department: {
        departmentId: {
            type: String
        },
        unit: {
            type: String
        },
        departmentName: {
            type: String
        },
        office: {
            type: String
        }
    },
    governmentIssuedNumbers: {
        sss: {
            type: String
        },
        gsis: {
            type: String
        },
        tin: {
            type: String
        },
        philhealth: {
            type: String
        },
        pagibig: {
            type: String
        },
        universalId: {
            type: String
        },
        dln: {
            type: String
        },
        prc: {
            type: String
        }
    },
    immediateSuperior: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    civilStatus: {
        type: String
    },
    emailAddresses: {
        email1: {
            type: String
        },
        email2: {
            type: String
        }
    },
    religion: {
        type: String
    }
});

export default mongoose.model<IEmployeeInformation>('EmployeeInformation', EmployeeInformationSchema);
