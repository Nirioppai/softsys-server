"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../employee/index");
const faker_1 = __importDefault(require("faker"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// DB Config
require('../../_config/dbConf')();
const EmployeeSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    // hash password with the default value of DEVSCRUM
    const password = yield bcryptjs_1.default.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);
    // delete previous admin accounts on the data base
    yield index_1.EmployeeModel.deleteMany({});
    console.log('Deleting previous admin accounts ....');
    /**
     *  Hold on all values in an array
     *  @TYPES Array of Objects
     */
    let adminAccounts = [];
    // create 10 random accounts
    for (let i = 0; i < 10; i++) {
        const admins = new index_1.EmployeeModel({
            employeeId: '2021-' + faker_1.default.datatype.number(9999),
            name: {
                firstName: faker_1.default.name.firstName(),
                middleName: faker_1.default.name.middleName(),
                lastName: faker_1.default.name.lastName(),
                title: faker_1.default.name.title(),
                suffix: faker_1.default.name.suffix()
            },
            dateOfBirth: {
                month: '02',
                day: '25',
                year: '2000'
            },
            contactNumber: {
                mobileNumber: [faker_1.default.phone.phoneNumber(), faker_1.default.phone.phoneNumber()],
                landLineNumber: [faker_1.default.phone.phoneNumberFormat()]
            },
            homeAddress: {
                homeNumOrLotNum: faker_1.default.address.streetName(),
                streetName: faker_1.default.address.streetAddress(),
                districtOrTown: faker_1.default.address.city(),
                zipCode: faker_1.default.address.zipCode(),
                province: faker_1.default.address.cardinalDirection(),
                country: faker_1.default.address.country()
            },
            currentAddress: {
                homeNumOrLotNum: faker_1.default.address.streetName(),
                streetName: faker_1.default.address.streetAddress(),
                districtOrTown: faker_1.default.address.city(),
                zipCode: faker_1.default.address.zipCode(),
                province: faker_1.default.address.cardinalDirection(),
                country: faker_1.default.address.country()
            },
            permanentAddress: {
                homeNumOrLotNum: faker_1.default.address.streetName(),
                streetName: faker_1.default.address.streetAddress(),
                districtOrTown: faker_1.default.address.city(),
                zipCode: faker_1.default.address.zipCode(),
                province: faker_1.default.address.cardinalDirection(),
                country: faker_1.default.address.country()
            },
            nationality: faker_1.default.address.country(),
            gender: faker_1.default.name.gender(),
            password: password
        });
        // push generated data to the holder
        adminAccounts.push(admins);
    }
    // inserts accounts to database
    yield index_1.EmployeeModel.insertMany(adminAccounts);
    console.log('Seeding admin accounts ...');
});
exports.default = EmployeeSeed;
