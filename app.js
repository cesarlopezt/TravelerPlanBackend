const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./Routes/routes.js');
const bodyParser = require('body-parser');
const path = require('path');
require("dotenv/config");

app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.log(error));

app.use('/', router);

app.listen(3000);