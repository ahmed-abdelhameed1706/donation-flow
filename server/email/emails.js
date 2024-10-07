import logger from "../utils/logger.js";
import { mg, sender } from "./mailgun.config.js";

const DOMAIN = process.env.MAILGUN_DOMAIN;

export const sendRegisterEmail = async (email, name, password) => {
  try {
    const response = await mg.messages.create(DOMAIN, {
      from: sender,
      to: [email],
      subject: "Welcome to Donation Flow",
      text: `Hello ${name},\n\nThank you for registering with Donation Flow.\n\nHere are your login credentials:\n\nEmail: ${email}\nPassword: ${password}\n\nPlease keep this information safe and do not share it with anyone.\n\nمع بعض في الخير \n Best,\nAhmed Abd El Hameed`,
      "o:tag": ["register email"],
    });
  } catch (error) {
    logger.error("error in the sendRegisterEmail email", error);
  }
};
