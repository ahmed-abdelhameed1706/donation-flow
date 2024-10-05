import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";

const __dirname = path.resolve();

// Define log format
const logFormat = format.combine(
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Create Winston logger
const logger = createLogger({
  format: logFormat,
  transports: [
    // Console transport for development
    new transports.Console({
      level: "debug", // Adjust based on environment
      format: format.combine(format.colorize(), logFormat),
    }),
    // Daily rotate file transport for production logs
    new DailyRotateFile({
      level: "info",
      filename: path.join(__dirname, "logs", "app-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      maxFiles: "30d", // Keeps 30 days of logs
      maxSize: "5m",
    }),
    // Separate error log file
    new DailyRotateFile({
      level: "error",
      filename: path.join(__dirname, "logs", "error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      maxFiles: "30d",
      maxSize: "5m",
    }),
  ],
});

// If in production, log only to file
if (process.env.NODE_ENV === "production") {
  logger.remove(new transports.Console());
}

export default logger;
