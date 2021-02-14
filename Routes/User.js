import express from "express";
import Dest from "../Models/Destination.js";
const { Destination, DestinationSchema } = Dest;
import User from "../Models/User.js";
import bcryptjs from "bcryptjs";
const { genSalt, hash, compare } = bcryptjs;
import jwt from "jsonwebtoken";
import { registerValidation, loginValidation } from "./validation.js";
import Joi from "@hapi/joi";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users main API point");
});

router.post("/register", async (req, res) => {
    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking the DB for email already used
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists)
        return res
            .status(400)
            .send("Another user has been created with that Email Adress");

    // Hash password
    const salt = await genSalt();
    const hashedPassword = await hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        userSaved = await user.save();
        res.status(201).send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/login", async (req, res) => {
    // Validate
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if email exists
    const user = await findOne({ email: req.body.email });
    if (!user)
        return res
            .status(400)
            .send("Please provide a valid Email and password.");
    //Checking password
    const validPass = await compare(req.body.password, user.password);
    if (!validPass)
        return res
            .status(400)
            .send("Please provide a valid Email and password.");

    //Assign Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);

    res.status(200);
});

export default router;