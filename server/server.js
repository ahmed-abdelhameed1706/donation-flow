import dotenv from "dotenv";

import createServer from "./app.js";

dotenv.config();

const app = createServer();

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
