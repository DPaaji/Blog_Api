import Posts from "../models/postModel.js";

/**
 * getAllPosts
 * @params {}
 * @returns {array}
 */
export const getAllPosts = async () => {
  return await Posts.find();
};

/**
 * getPostById
 * @params {id}
 * @returns {array}
 */

export const getPostById = async (id) => {
  return await Posts.findById(id);
};

/**
 * deletePostById
 * @params {id}
 * @returns {array}
 */

export const deletePostById = async (id) => {
  return await Posts.findByIdAndDelete(id);
};

/**
 * updatePost
 * @params {id}
 * @returns {array}
 */

export const updatePost = async (id, post) => {
  return await Posts.findByIdAndUpdate(id, post);
};

/**
 * createPost
 * @params {}
 * @params {post}
 * @returns {array}
 */

export const createPost = async (post) => {
  return await Posts.create(post);
};
