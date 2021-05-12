// code goes here
import express, { Application, Request, Response, NextFunction } from 'express';
import http from 'http';
import logging from './_config/logging';
import cors from 'cors';

// routes
import authRoutes from './container/authentication/routers';

// require database configs and dotenv to allow the use or env variables
require('dotenv').config();
require('./_config/dbConf')();

const app: Application = express();
const server = http.createServer(app);

// use json to enable to receive and respond with json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// this section consumes the apis
app.use('/api/auth', authRoutes);

/**
 * This section logs the server requests
 */
const NAMESPACE = 'Server';
app.use((req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

// start the app
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log('Stack HRIS-ATTENDANCE Server \n');
    console.log('Server started on port ' + port);
});
