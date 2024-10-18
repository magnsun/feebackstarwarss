const rateLimit = require("express-rate-limit")

exports.limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20, // limit each IP to 50 requests per windowMs
    message: "Too many accounts created from this IP, please try again after a minute"
});
