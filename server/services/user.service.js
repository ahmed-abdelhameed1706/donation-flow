import logger from "../utils/logger.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const login = async (userInput, res) => {
  try {
    const { email, password } = userInput;

    if (!email || !password) {
      return {
        status: 400,
        message: "Email and password are required",
      };
    }

    const user = await User.findOne({ email });
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return {
        status: 401,
        message: "Invalid password",
      };
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return {
      status: 200,
      message: "Login successful",
      user: {
        ...user._doc,
        password: undefined,
      },
    };
  } catch (error) {
    logger.error("error in the login service", error);
    throw new Error("Login failed");
  }
};

export const getMe = async (req) => {
  try {
    const user = await User.findById(req.userId).select("-password").exec();

    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }

    return {
      status: 200,
      message: "User found",
      user,
    };
  } catch (error) {
    logger.error("error in the getMe service", error);
    throw new Error("User not found");
  }
};
