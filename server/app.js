import express from "express";
import cors from "cors";
import path from "path";
import loggingMiddleware from "./middleware/loggingMiddleware.js";
const ORIGIN =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_FRONTEND_URL
    : process.env.DEV_FRONTEND_URL;

const __dirname = path.resolve();

const createServer = () => {
  const app = express();

  app.use(loggingMiddleware);

  app.use(express.json());

  app.use(
    cors({
      origin: ORIGIN,
      credentials: true,
    })
  );

  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  return app;
};

export default createServer;
