import { AdminModel } from '../admin/index';
import faker from 'faker';
import bcryptjs from 'bcryptjs';

// DB Config
require('dotenv').config();
require('../_config/dbConf')();

const AdminSeed = async () => {
    // hash password with the default value of DEVSCRUM
    const password = await bcryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);

    // delete previous admin accounts on the data base
    await AdminModel.deleteMany({});
    console.log('Deleting previous admin accounts ....');

    /**
     *  Hold on all values in an array
     *  @TYPES Array of Objects
     */
    let adminAccounts = [];

    // create 10 random accounts
    for (let i = 0; i < 10; i++) {
        const admins = new AdminModel({
            adminId: '2021-' + faker.datatype.number(9999),
            name: {
                firstName: faker.name.firstName(),
                middleName: faker.name.middleName(),
                lastName: faker.name.lastName(),
                title: faker.name.title(),
                suffix: faker.name.suffix()
            },
            dateOfBirth: {
                month: '02',
                day: '25',
                year: '2000'
            },
            contactNumber: {
                mobileNumber: [faker.phone.phoneNumber(), faker.phone.phoneNumber()],
                landLineNumber: [faker.phone.phoneNumberFormat()]
            },
            homeAddress: {
                homeNumOrLotNum: faker.address.streetName(),
                streetName: faker.address.streetAddress(),
                districtOrTown: faker.address.city(),
                zipCode: faker.address.zipCode(),
                province: faker.address.cardinalDirection(),
                country: faker.address.country()
            },
            currentAddress: {
                homeNumOrLotNum: faker.address.streetName(),
                streetName: faker.address.streetAddress(),
                districtOrTown: faker.address.city(),
                zipCode: faker.address.zipCode(),
                province: faker.address.cardinalDirection(),
                country: faker.address.country()
            },
            permanentAddress: {
                homeNumOrLotNum: faker.address.streetName(),
                streetName: faker.address.streetAddress(),
                districtOrTown: faker.address.city(),
                zipCode: faker.address.zipCode(),
                province: faker.address.cardinalDirection(),
                country: faker.address.country()
            },
            nationality: faker.address.country(),
            gender: faker.name.gender(),
            password: password
        });

        // push generated data to the holder
        adminAccounts.push(admins);
    }

    // inserts accounts to database
    await AdminModel.insertMany(adminAccounts);
    console.log('Seeding admin accounts ...');

    return { success: true };
};

export default AdminSeed;
