import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import userRoute from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentsRoutes.js";

dotenv.config();
/**
 * PORT
 * This method takes server PORT from dotenv.
 */
const PORT = process.env.PORT;
const server = express();
server.use(express.json());

// routes defined
server.use("/api/users", userRoute);
server.use("/api/posts", postRoutes);
server.use("/api/comments", commentRoutes);

//server response displayed
/**
 * connectDB
 * This method defines PORT.
 */
connectDB();
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
