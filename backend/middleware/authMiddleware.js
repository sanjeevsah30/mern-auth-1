import jwt from "jsonwebtoken";
import asychandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asychandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorized user, no token");
    }
  } else {
    res.status(401);
    throw new Error("not authorized user, no token");
  }
});

export { protect };
