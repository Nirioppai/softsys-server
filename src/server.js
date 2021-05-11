// code goes here
require('dotenv').config();
require('./config/dbConf')();

// dependencies
const express = require("express");
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// use json to enable to receive and respond with json
app.use(express.json());
app.use(cors());

// start the app
const port = process.env.PORT || 5000;
server.listen(port, () => console.log("Server started on port " + port));