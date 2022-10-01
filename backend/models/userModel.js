import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

/**
 * userSchema
 * This is a Schema method which gives a standard and validation to store user data in the database.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      minLength: [2, "minimum length should be 2 characters"],
      maxLength: [32, "maximum length should not exceed 32 characters"],
    },
    email: {
      type: String,
      format: "email",
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    dateOfBirth: {
      type: Date,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
    },
    number: {
      type: Number,
    },
  },
  { timeStamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

userSchema.methods.matchPassword = async function (loginPassword) {
  return await bcrypt.compare(loginPassword, this.password);
};
const Users = mongoose.model("Users", userSchema);
export default Users;
