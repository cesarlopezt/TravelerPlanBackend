import express from "express";

import logger from "../Middlewares/logger.js";

const router = express.Router();

// Middlewares
router.use(logger);

// Import Routes
import destinationRoute from "./Destination.js";
import userRoute from "./User.js";

// Routes Middlewares
router.use("/destination", destinationRoute);
router.use("/user", userRoute);

export default router;