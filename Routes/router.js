import express from "express";

const router = express.Router();

// Import Routes
import destinationRoute from "./Destination.js";
import userRoute from "./User.js";

// Routes Middlewares
router.use("/destination", destinationRoute);
router.use("/user", userRoute);

export default router;