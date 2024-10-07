import logger from "../utils/logger.js";
import { createUser } from "../services/admin.service.js";

export const createUserController = async (req, res) => {
  try {
    const response = await createUser(req.body);
    return res
      .status(response.status)
      .json({ message: response.message, user: response.user });
  } catch (error) {
    logger.error("error in the createUser controller", error);
    res.status(500).json({ message: "User creation failed" });
  }
};
