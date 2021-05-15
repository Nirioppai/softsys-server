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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../permissions/index");
const modules = ['Admin', 'Employee', 'Permissions', 'Auth'];
const actions = ['Read', 'Create', 'Update', 'Delete'];
const permissions = [];
function capitalize(str) {
    return `${[str.split('')[0].toUpperCase(), str.slice(1)].join('')}`;
}
const PermissionSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield index_1.PermissionSchema.deleteMany({});
    console.log('Deleting permissions...');
    for (let mod of modules) {
        for (let action of actions) {
            let access = action === 'Read' ? 'view' : action === 'Update' ? 'modify' : action === 'Delete' ? 'remove' : 'create';
            let description;
            if (mod === 'Employee' || mod === 'Admin') {
                // Accounts go here
                description =
                    access === 'view'
                        ? `Access to ${access} ${mod.toLowerCase()} data and accounts in the Account Manager`
                        : `${capitalize(access)} ${mod.toLocaleLowerCase()} data and accounts in the Account Manager`;
            }
            else if (mod === 'Auth') {
                // Auth items go here
                description = access === 'view' ? `Access to Roles Panel in the Account Manager settings` : `${capitalize(access)} items in the Roles panel of the Account Manager settings`;
            }
            else {
                // Rest of items that are in the Configurations go here.
                if (access === 'view') {
                    description = `Access to view ${mod === 'Enrollment' ? `${mod.toLowerCase()} periods` : `${mod.toLowerCase()} items`} in the Configuration page`;
                }
                else {
                    description = `${capitalize(access)} ${mod === 'Enrollment' ? `${mod.toLowerCase()} periods` : `${mod.toLowerCase()} items`} in the Configuration page`;
                }
            }
            const newPermission = new index_1.PermissionSchema({
                name: `${mod}:${action}`,
                description
            });
            permissions.push(newPermission);
        }
    }
    yield index_1.PermissionSchema.insertMany(permissions);
    console.log('Seeding permissions...');
});
exports.default = PermissionSeed;
