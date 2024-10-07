import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const adminRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).exec();
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized - User does not exist" });
    }

    if (user.role !== "admin") {
      return res
        .status(401)
        .json({ message: "Unauthorized - You are not an admin" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unauthorized - An Error Occurred " });
  }
};
