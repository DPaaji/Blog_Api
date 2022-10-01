import mongoose from "mongoose";
import dotenv from "dotenv";

/**
 * connectDB
 * This is a method to make sure the connection has been established successfully
 */

export const connectDB = async () => {
  try {
    dotenv.config();
    mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
    });

    console.log("Database Connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
