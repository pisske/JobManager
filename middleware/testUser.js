import { BadRequestError } from "../errors/Index.js";

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test user...Read only!");
  }
  next();
};

export default testUser;
