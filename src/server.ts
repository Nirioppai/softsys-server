// code goes here
import express, { Application } from 'express';
import http from 'http';
import cors from 'cors';

// routes
import authRoutes from './container/authentication/routers';
import seedRoutes from './container/seeds/routers';
import adminRoutes from './container/admin/routers';

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
app.use('/api/seeds', seedRoutes);
app.use('/api/admin', adminRoutes);

// start the app
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log('Stack HRIS-ATTENDANCE Server \n');
    console.log('Server started on port ' + port);
});
