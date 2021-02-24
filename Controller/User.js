import express from "express";
import bcryptjs from "bcryptjs";
const { genSalt, hash, compare } = bcryptjs;
import jwt from "jsonwebtoken";

import UserModel from "../Models/User.js";
import { registerValidation, loginValidation } from "../Models/validation/UserValidation.js";

async function register(req, res){
    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking the DB for email already used
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400)
        .send("Another user has been created with that Email Adress");

    // Hash password
    const salt = await genSalt();
    const hashedPassword = await hash(req.body.password, salt);

    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        await user.save();
        res.status(201).send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
}

async function login(req, res){
    // Validate
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if email exists
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user)
        return res.status(400)
            .send("Please provide a valid Email and password.");
    //Checking password
    const validPass = await compare(req.body.password, user.password);
    if (!validPass)
        return res.status(400)
            .send("Please provide a valid Email and password.");

    //Assign Token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.status(200).header("auth-token", token).send(token);
}

export default {
    register,
    login
}