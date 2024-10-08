import mongoose from "mongoose";
import logger from "../utils/logger.js";

import { checkAndCreateAdmin } from "../utils/checkAndCreateAdmin.js";

const connectToMongo = async () => {
  logger.info("connecting to mongo...");
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    checkAndCreateAdmin();
    logger.info(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectToMongo;
