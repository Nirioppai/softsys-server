import IRole from './_interface';
import RoleSchema from './model';
import RoleController from './controller';
import RoleService from './service';
import { validateCreate, validateDeleteMany } from './validation';

export { IRole, RoleSchema, RoleController, RoleService, validateCreate, validateDeleteMany };
