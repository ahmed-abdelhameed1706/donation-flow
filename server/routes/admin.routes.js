import express from "express";

import logger from "../utils/logger.js";
import { createUserController } from "../controllers/admin.controller.js";
import { adminRoute } from "../middleware/adminRoute.js";

const router = express.Router();

router.post("/create-user", adminRoute, createUserController);

export default router;
