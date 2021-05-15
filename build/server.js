"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// code goes here
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
// routes
const routers_1 = __importDefault(require("./container/authentication/routers"));
const routers_2 = __importDefault(require("./container/seeds/routers"));
const routers_3 = __importDefault(require("./container/admin/routers"));
const routers_4 = __importDefault(require("./container/employee/routers"));
const routers_5 = __importDefault(require("./container/employeeInformation/routers"));
// require database configs and dotenv to allow the use or env variables
require('dotenv').config();
require('./_config/dbConf')();
const app = express_1.default();
const server = http_1.default.createServer(app);
// use json to enable to receive and respond with json
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
// this section consumes the apis
app.use('/api/auth', routers_1.default);
app.use('/api/seeds', routers_2.default);
app.use('/api/admin', routers_3.default);
app.use('/api/employee', routers_4.default);
app.use('/api/employeeInformation', routers_5.default);
// start the app
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log('Stack HRIS-ATTENDANCE Server \n');
    console.log('Server started on port ' + port);
});
