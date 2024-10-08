import logger from "./logger.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const checkAndCreateAdmin = async () => {
  try {
    const admin = await User.findOne({ role: "admin" });
    if (!admin) {
      const newAdmin = new User({
        name: "Admin",
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        role: "admin",
      });
      await newAdmin.save();
      logger.info("Admin created successfully");
    }
  } catch (error) {
    logger.error("Error while creating admin", error);
  }
};
