import express from "express";

import {
  loginController,
  getMeController,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/login", loginController);
router.get("/me", protectRoute, getMeController);

export default router;
