import Comments from "../models/commentsModel.js";

/**
 * getAllComments
 * @params {}
 * @returns {array}
 */

export const getAllComments = async () => {
  return await Comments.find();
};

/**
 * getCommentById
 * @params {id}
 * @returns {array}
 */

export const getCommentById = async (id) => {
  return await Comments.findById(id);
};

/**
 * deleteCommentById
 * @params {id}
 * @returns {array}
 */

export const deleteComment = async (id) => {
  return await Comments.findByIdAndDelete(id);
};

/**
 * activeInActive
 * @params {id}
 * @returns {array}
 */

export const activeInActive = async (id, comment) => {
  return await Comments.findByIdAndUpdate(id, comment);
};

/**
 * createComment
 * @params {}
 * @params {comment}
 * @returns {array}
 */

export const createComment = async (comment) => {
  return await Comments.create(comment);
};
