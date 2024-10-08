import express from "express";

import {
  loginController,
  getMeController,
  logoutController,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/login", loginController);
router.get("/me", protectRoute, getMeController);
router.post("/logout", protectRoute, logoutController);

export default router;
