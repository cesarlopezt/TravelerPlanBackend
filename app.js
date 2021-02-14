const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const bodyParser = require("body-parser");
// const path = require("path");

mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to DB"))
    .catch((error) => console.log(error));

//Middlewares
app.use(express.json()); //Body-parser is no longer useful

//Import Routes
const destinationRoute = require("./Routes/Destination");
const userRoute = require("./Routes/User");

//Routes Middlewares
app.use("/destination", destinationRoute);
app.use("/user", userRoute);

app.listen(3000);
