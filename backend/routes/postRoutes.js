import express from "express";
import {
  erasePostById,
  fetchPostById,
  getPosts,
  postGetCreated,
  postUpdate,
} from "../controllers/postsController.js";
import { protect } from "../middleware/authMiddleware.js";

/**
 * postRoutes
 * This is a method to provide routes to the API
 */

const postRoutes = express.Router();

postRoutes.route("/").get(getPosts).post(protect, postGetCreated);
postRoutes
  .route("/:id")
  .get(fetchPostById)
  .delete(erasePostById)
  .put(postUpdate);

export default postRoutes;
