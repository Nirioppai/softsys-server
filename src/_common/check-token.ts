import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { removeProperty } from './removeProperty';

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

export { jwtAuth, checkIfAdmin, checkIfEmployee };
