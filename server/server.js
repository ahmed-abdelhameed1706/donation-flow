import dotenv from "dotenv";

import createServer from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5005;

const app = createServer();

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
