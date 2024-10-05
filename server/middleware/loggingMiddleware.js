// middleware/loggerMiddleware.js
import logger from "../utils/logger.js";

// Middleware function to log incoming requests
const loggingMiddleware = (req, res, next) => {
  const start = Date.now();
  const { method, url } = req;

  // Ignore requests for static file types
  const ignoreExtensions = [".png", ".jpg", ".gif", ".ico", ".css", ".js"];
  if (ignoreExtensions.some((ext) => url.endsWith(ext))) {
    return next();
  }

  // When the response finishes, log the details
  res.on("finish", () => {
    const duration = Date.now() - start;
    const statusCode = res.statusCode;

    // Custom log message
    logger.info(
      `${method} request was sent and status is ${statusCode} - Duration: ${duration}ms`
    );
  });

  next();
};

export default loggingMiddleware;
