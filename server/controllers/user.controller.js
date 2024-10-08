import logger from "../utils/logger.js";
import { login, getMe, logout } from "../services/user.service.js";

export const loginController = async (req, res) => {
  try {
    const response = await login(req.body, res);
    return res
      .status(response.status)
      .json({ message: response.message, user: response.user });
  } catch (error) {
    logger.error("error in the login controller", error);
    res.status(500).json({ message: "Login failed" });
  }
};

export const getMeController = async (req, res) => {
  try {
    const response = await getMe(req);
    return res
      .status(response.status)
      .json({ message: response.message, user: response.user });
  } catch (error) {
    logger.error("error in the getMe controller", error);
    res.status(500).json({ message: "User not found" });
  }
};

export const logoutController = async (req, res) => {
  try {
    const response = await logout(res);
    return res.status(response.status).json({ message: response.message });
  } catch (error) {
    logger.error("error in the logout controller", error);
    res.status(500).json({ message: "Logout failed" });
  }
};
