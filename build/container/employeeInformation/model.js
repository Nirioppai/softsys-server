"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const EmployeeInformationSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
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
    },
    nationality: {
        type: String
    }
});
exports.default = mongoose_1.default.model('EmployeeInformation', EmployeeInformationSchema);
