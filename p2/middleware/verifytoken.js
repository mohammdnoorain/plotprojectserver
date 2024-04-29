
const jwt = require("jsonwebtoken");
const Collection = require("../modal/modal");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send("Unauthorized: No token provided");

    const verified = jwt.verify(token, process.env.secretkey);
    if (!verified) return res.status(401).send("Unauthorized: Invalid token");

    const user = await Collection.findOne({ _id: verified.user._id });
    if (!user) return res.status(404).send("User not found");

    req.user = user;

    if (!req.session.user) {
      req.session.user = req.user;
    }

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).send("Token expired");
    } else {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
};

module.exports = {
  verifyToken
};

