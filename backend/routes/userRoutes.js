import express from "express";
import {
  fetchUserById,
  getUsers,
  eraseUser,
  userAuthorization,
  registerUser,
  softDeleteUser,
} from "../controllers/userController.js";

/**
 * userRoutes
 * This is a method to provide routes to the API
 */

const userRoute = express.Router();

userRoute.route("/").get(getUsers).post(registerUser);
userRoute
  .route("/:id")
  .get(fetchUserById)
  .delete(eraseUser)
  .patch(softDeleteUser);
userRoute.route("/login").post(userAuthorization);

export default userRoute;
