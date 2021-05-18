import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { removeProperty } from './removeProperty';
import { PermissionSchema } from '../container/permissions';

const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.get('authorization');

    if (!authHeader) {
        return res.status(403).send({ success: false, message: 'Not authorized' });
    }
    // get the authorization token
    const token = authHeader && authHeader.split(' ')[1];
    // verify the token
    jwt.verify(token, process.env.JWT_ACCESS_SECRET || 'hello world', (err, decoded) => {
        if (err) {
            return res.status(403).send({ success: false, message: 'You are not authorize for this action' });
        }

        const decodedInfo = decoded;
        // append decoded info to the request body for other middleware usages
        req.body = { ...req.body, userInfo: decodedInfo };
        next();
    });
};

const checkAccess = (scope: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        let userPermissionsIds: Array<String> = [];
        let permissionNames: Array<String> = [];
        userPermissionsIds = req.body.userInfo.permissions;
        // this query will allow you to pass in an array of object ids and will return an array of object that matches the find
        const permissions = await PermissionSchema.find({ _id: { $in: userPermissionsIds } });

        for (var i = 0; i < permissions.length; i++) {
            permissionNames.push(permissions[i].name);
        }

        if (!permissionNames.includes(scope)) {
            return res.status(403).send({ success: false, message: 'You do not have a permission for this module' });
        }

        /**
         *  Todo: Check if there is a role,
         *  If Role exist check the permission of that role,
         *  If Not check permission directly
         */

        next();
    };
};

const checkIfAdmin = (req: Request, res: Response, next: NextFunction) => {
    // check if the creds accessing the api is of type "admin"
    if (req.body.userInfo.type !== 'admin') {
        return res.status(403).send({ success: false, message: 'You are not authorize for this action' });
    }
    // remove the appended object after the creds validation
    req.body = removeProperty(req.body, 'userInfo');
    next();
};

const checkIfEmployee = (req: Request, res: Response, next: NextFunction) => {
    // check if the creds accessing the api is of type "employee"
    if (req.body.userInfo.type !== 'employee') {
        return res.status(403).send({ success: false, message: 'You are not authorize for this action' });
    }
    // remove the appended object after the creds validation
    req.body = removeProperty(req.body, 'userInfo');
    next();
};

export { jwtAuth, checkIfAdmin, checkIfEmployee, checkAccess };
