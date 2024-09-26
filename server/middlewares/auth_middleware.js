const jwt = require("jsonwebtoken");
const User = require("../models/user_models");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    console.log("Token not provided");
    return res.status(401).json({ message: "Unauthorized. Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("Token received:", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("Token verified:", isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

    if (!userData) {
      console.log("User not found");
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    req.token = token;
    req.user = userData;
    req.userID = userData._id;

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
