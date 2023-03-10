import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/Index.js";

const auth = async (req, res, next) => {
  // const token = req.cookies.token;
  // if (!token) {
  //   throw new UnAuthenticatedError("Authentication Invalid");
  // }
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const testUser = payload.userId === "63f78221294a83f2f1fca404";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
  console.log(authHeader);
};

export default auth;
