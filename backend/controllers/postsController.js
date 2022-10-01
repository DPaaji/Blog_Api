import expressAsyncHandler from "express-async-handler";
import {
  createPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePost,
} from "../services/postServices.js";

/**
 * getUsers is a method to get all users data at once
 * @params {*} req
 * @params {Object } res
 */

export const getPosts = expressAsyncHandler(async (req, res) => {
  try {
    const post = await getAllPosts();
    res.json({ data: post, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * fetchPostById is a method to get user data via Id
 * @params {Object} req
 * @params {Object} res
 */

export const fetchPostById = expressAsyncHandler(async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.json({ data: post, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * eraseUser
 * This is a method to delete post Data
 * @params {Object} req
 * @params {Object} res
 */

export const erasePostById = expressAsyncHandler(async (req, res) => {
  try {
    const post = await deletePostById(req.params.id);
    if (post) {
      res.json({ data: "Data Deleted", status: "success" });
    }
    if (!post) {
      res.json({ data: "data not found", status: "Failed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * postUpdate
 * This is a  method to update post details
 *
 * @params {Object} req
 * @params {Object} res
 * @return {Object} post
 */

export const postUpdate = expressAsyncHandler(async (req, res) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.json({ data: post, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * postGetCreated
 * This is a method creates post Data
 * @params {Object} req
 * @params {*} res
 * @return{Object} post
 */

export const postGetCreated = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.id;
    const data = req.body;
    console.log("are wah!", data);

    const comments = {
      ...data,
      createdBy: id,
    };

    const post = await createPost(comments);

    res.json({ data: post, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
