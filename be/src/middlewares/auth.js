const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse.js");

const authenticate = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
      if (error) {
        res.status(401).send({ messagge: "Token invalid" });
      } else {
        console.log(decode);
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ messagge: "Authorization not found" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role == "admin") {
    next();
  } else {
    const error = new ErrorResponse("You must be administrador", 403);
    next(error);
  }
};

module.exports = { authenticate, adminOnly };