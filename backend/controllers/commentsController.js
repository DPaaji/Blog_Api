import expressAsyncHandler from "express-async-handler";
import {
  activeInActive,
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
} from "../services/commentsServices.js";

/**
 * getComments
 * This is a method to get all the comments at once
 * @params {*} req
 * @params {*Object } res
 */

export const getComments = expressAsyncHandler(async (req, res) => {
  try {
    const comment = await getAllComments();
    res.json({ data: comment, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * fetchCommentById
 * This is a method to get a comment via Id
 * @params {Object} req
 * @params {*} res
 */

export const fetchCommentById = expressAsyncHandler(async (req, res) => {
  try {
    const comment = await getCommentById(req.params.id);
    res.json({ data: comment, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * eraseCommentById
 * This is a method to delete a comment via Id
 * @params {Object} req
 * @params {*} res
 */

export const eraseCommentById = expressAsyncHandler(async (req, res) => {
  try {
    const comment = await deleteComment(req.params.id);
    if (comment) {
      res.json({ data: "Comment Deleted", status: "success" });
    }
    if (!comment) {
      res.json({ data: "Comment not Found", status: "Failed" });
      res.json({ data: comment, status: "success" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * activeInActive
 * This is a method to show User Status
 * @params {Object} req
 * @params {*} res
 */

export const activeOrInActive = expressAsyncHandler(async (req, res) => {
  try {
    const comment = await activeInActive(req.params.id, req.body);
    res.json({ data: comment, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * constructComment
 * This is a method that creates a Comment
 * @params {Object} req
 * @params {*} res
 */

export const constructComment = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.id;
    const data = req.body;
    console.log("are wah!", data);
    const post_Id = req.params.id;
    const comments = {
      ...data,
      createdBy: id,
      postId: post_Id,
    };
    const comment = await createComment(comments);
    res.json({ data: comment, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
