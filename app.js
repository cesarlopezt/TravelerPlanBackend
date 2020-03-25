const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB");
})

app.listen(3000);