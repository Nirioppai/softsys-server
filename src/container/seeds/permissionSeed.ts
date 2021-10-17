import { PermissionSchema } from '../permissions/index';

const modules = ['Admin', 'Employee', 'Permissions', 'Auth', 'Role', 'Training-Program', 'Training-Application', 'Organization-Charts', 'Applicant', 'Evaluation-Form', 'Employee-Evaluation'];

const actions = ['Read', 'Create', 'Update', 'Delete'];

const permissions: Array<Object> = [];

function capitalize(str: string) {
    return `${[str.split('')[0].toUpperCase(), str.slice(1)].join('')}`;
}

const PermissionSeed = async () => {
    await PermissionSchema.deleteMany({});
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
            } else if (mod === 'Auth') {
                // Auth items go here
                description = access === 'view' ? `Access to Roles Panel in the Account Manager settings` : `${capitalize(access)} items in the Roles panel of the Account Manager settings`;
            } else {
                // Rest of items that are in the Configurations go here.
                if (access === 'view') {
                    description = `Access to view ${mod === 'Enrollment' ? `${mod.toLowerCase()} periods` : `${mod.toLowerCase()} items`} in the Configuration page`;
                } else {
                    description = `${capitalize(access)} ${mod === 'Enrollment' ? `${mod.toLowerCase()} periods` : `${mod.toLowerCase()} items`} in the Configuration page`;
                }
            }

            const newPermission = new PermissionSchema({
                name: `${mod}:${action}`,
                description
            });

            permissions.push(newPermission);
        }
    }
    console.log('Seeding permissions...');
    await PermissionSchema.insertMany(permissions);
    console.log('Permissions seeded.');
};

export default PermissionSeed;
