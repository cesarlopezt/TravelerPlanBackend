import express from "express";
import mogoose from "mongoose";
import dotenv from "dotenv";

import routerRoute from "./Routes/router.js";

const app = express();

dotenv.config();
mogoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to DB"))
    .catch((error) => console.log(error));

//Middlewares
app.use(express.json());
app.use("", routerRoute);


app.listen(3000);

export default app;