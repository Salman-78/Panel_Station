const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
 
    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Unauthorized: No token provided" });
    }

    const jwtToken = token.split(" ")[1];
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select("-password");

    if (!userData) {
      return res.status(401).json({ msg: "Unauthorized: User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error);
    res.status(401).json({ msg: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
