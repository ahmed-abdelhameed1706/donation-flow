import dotenv from "dotenv";

import connectToMongo from "./config/connectToMongo.js";
import createServer from "./app.js";
import logger from "./utils/logger.js";

dotenv.config();

const PORT = process.env.PORT || 5005;

const app = createServer();

app.listen(PORT, () => {
  logger.info(`Server started at http://localhost:${PORT}`);
  connectToMongo();
});
