import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.routes.js";
import videoRoutes from "./routes/video.routes.js";
import commentRoutes from "./routes/comments.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import {connect} from './config/connection.js';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

app.use(cors({ origin: "http://localhost:3000" }));

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(4000, () => {
  connect();
  console.log("Connected to Server");
});
