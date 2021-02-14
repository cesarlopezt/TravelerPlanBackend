import express from "express";
import UserController from "../Controller/User.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Users main API point");
});

router.post("/register", UserController.register);

router.post("/login", UserController.login);

export default router;