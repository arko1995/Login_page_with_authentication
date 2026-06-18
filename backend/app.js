import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import loginRouter from "./routes/login.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", loginRouter);

export default app;
