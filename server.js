import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
//db and authenticate user
import connectDB from "./db/connect.js";

//routes

import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";
// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.get("/", (req, res) => {
  // throw new Error("This is not working!");
  res.send("Hello");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}...`);
// });
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
