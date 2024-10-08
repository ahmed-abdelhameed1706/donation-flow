import logger from "../utils/logger.js";
import { createUser, getUsers } from "../services/admin.service.js";

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

export const getUsersController = async (req, res) => {
  try {
    const response = await getUsers();
    return res
      .status(response.status)
      .json({ message: response.message, users: response.users });
  } catch (error) {
    logger.error("error in the getUsers controller", error);
    res.status(500).json({ message: "Users not found" });
  }
};
