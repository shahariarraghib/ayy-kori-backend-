const UserLogInfo = require("../Models/userLogInfo");

const authenticateKey = async (req, res, next) => {
  try {
    const requestApiKey = req.header("x-api-key");
    const user = await UserLogInfo.findOne({ api_key: requestApiKey });

    if (user) {
      next();
    } else {
      return res
        .status(403)
        .send({ error: { code: 403, message: "You are not allowed." } });
    }
  } catch (error) {
    console.error("Error in authentication:", error);
    return res
      .status(500)
      .send({ error: { code: 500, message: "Internal Server Error." } });
  }
};

module.exports = { authenticateKey };
