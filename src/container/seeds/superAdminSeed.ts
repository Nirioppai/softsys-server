import { AdminModel } from '../admin/index';
import { PermissionSchema } from '../permissions/index';
import faker from 'faker';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const SuperAdminSeed = async () => {
    // hash password with the default value of DEVSCRUM
    const password = await bcryptjs.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);
    let permissionsIds: Array<String> = [];

    const permissions = await PermissionSchema.find();

    permissions.forEach((permission) => {
        permissionsIds.push(permission._id);
    });

    const superAdmin = new AdminModel({
        adminId: '2021-0001',
        name: {
            firstName: 'Super',
            middleName: '',
            lastName: 'Admin',
            title: '',
            suffix: ''
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
            zipCode: Math.floor(1000 + Math.random() * 9000),
            province: faker.address.cardinalDirection(),
            country: faker.address.country()
        },
        currentAddress: {
            homeNumOrLotNum: faker.address.streetName(),
            streetName: faker.address.streetAddress(),
            districtOrTown: faker.address.city(),
            zipCode: Math.floor(1000 + Math.random() * 9000),
            province: faker.address.cardinalDirection(),
            country: faker.address.country()
        },
        permanentAddress: {
            homeNumOrLotNum: faker.address.streetName(),
            streetName: faker.address.streetAddress(),
            districtOrTown: faker.address.city(),
            zipCode: Math.floor(1000 + Math.random() * 9000),
            province: faker.address.cardinalDirection(),
            country: faker.address.country()
        },
        nationality: faker.address.country(),
        permissions: permissionsIds,
        role: 'Super-admin',
        gender: faker.name.gender(),
        password: password
    });

    // inserts accounts to database
    console.log('Seeding admin accounts ...');
    await superAdmin.save();
    console.log('Admin accounts seeded.');
};

export default SuperAdminSeed;
