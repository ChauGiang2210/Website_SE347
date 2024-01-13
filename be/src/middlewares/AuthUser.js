const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const AuthUser = async (req) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) return false;

  try {
    const extractAuthUserInfo = jwt.verify(token, env.process.ACCESS_TOKEN_SECRET);
    if (extractAuthUserInfo) return extractAuthUserInfo;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = AuthUser;
