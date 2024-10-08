import express from "express";

import logger from "../utils/logger.js";
import {
  createUserController,
  getUsersController,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/users", createUserController);
router.get("/users", getUsersController);

export default router;
