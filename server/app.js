import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

import loggingMiddleware from "./middleware/loggingMiddleware.js";

import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";

const ORIGIN =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_FRONTEND_URL
    : process.env.DEV_FRONTEND_URL;

const __dirname = path.resolve();

const createServer = () => {
  const app = express();

  app.use(loggingMiddleware);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(
    cors({
      origin: ORIGIN,
      credentials: true,
    })
  );

  app.use("/api/admin", adminRoutes);
  app.use("/api/user", userRoutes);

  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  return app;
};

export default createServer;
