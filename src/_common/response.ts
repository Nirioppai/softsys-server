import { Response } from 'express';

/**
 *
 * @param res  { Takes the res variable from express to enable sending the data to client }
 * @param result { takes the returned result from the service with the data tied from the process }
 * @returns { Object with {  success: Boolean, message: String, data: Body, deepLog: Object } }
 */
const sendResponse = (res: Response, result: any) => {
    // checks if it failed
    // stop the excution of the code and send back a response
    //  400s Error Only
    if (!result.success) {
        return res.status(result.code).send(result);
    }

    res.status(200).send(result);
};

export { sendResponse };
