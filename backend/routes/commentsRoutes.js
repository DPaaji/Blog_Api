import express from "express";
import {
  activeOrInActive,
  constructComment,
  eraseCommentById,
  fetchCommentById,
  getComments,
} from "../controllers/commentsController.js";

/**
 * commentRoutes
 * This is a method to provide routes to the API
 */

const commentRoutes = express.Router();
commentRoutes.route("/").get(getComments);
commentRoutes
  .route("/:id")
  .get(fetchCommentById)
  .delete(eraseCommentById)
  .patch(activeOrInActive)
  .post(constructComment);

export default commentRoutes;
