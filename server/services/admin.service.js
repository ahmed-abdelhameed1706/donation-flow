import logger from "../utils/logger.js";
import User from "../models/user.model.js";
import { sendRegisterEmail } from "../email/emails.js";

export const createUser = async (userInput) => {
  try {
    const { name, email } = userInput;

    if (!name || !email) {
      return {
        status: 400,
        message: "Name and email are required",
      };
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return {
        status: 409,
        message: "User already exists",
      };
    }

    const password = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(password);
    const user = new User({ name, email, password });
    await user.save();

    await sendRegisterEmail(email, name, password);
    return {
      status: 201,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    };
  } catch (error) {
    logger.error("error in the createUser service", error);
  }
};

export const getUsers = async () => {
  try {
    const users = await User.find({}).select("-password").exec();
    return {
      status: 200,
      message: "Users fetched successfully",
      users,
    };
  } catch (error) {
    logger.error("error in the getUsers service", error);
  }
};
