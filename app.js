import express, { json } from "express";
const app = express();
import mogoose from "mongoose";
import { config } from "dotenv";

import routerRoute from "./Routes/router.js";


config();
mogoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to DB"))
    .catch((error) => console.log(error));

//Middlewares
app.use(json());
app.use("", routerRoute)


app.listen(3000);

export default app;