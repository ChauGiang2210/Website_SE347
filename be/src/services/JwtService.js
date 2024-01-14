const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generalAccessToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d',
  });
}

const generalRefreshToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '365d',
  });
}



module.exports = { generalAccessToken, generalRefreshToken };