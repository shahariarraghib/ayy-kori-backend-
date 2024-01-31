const setRateLimit = require("express-rate-limit");

// Rate limit middleware
const rateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: 10,
  headers: true,
  onLimitReached: (req, res, options) => {
    res.status(429).json({
      error: "Too Many Requests",
    });
  },
});

module.exports = rateLimitMiddleware;
