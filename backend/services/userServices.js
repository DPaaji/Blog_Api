import Users from "../models/userModel.js";

/**
 * getAllUsers
 * @params {}
 * @returns {Users}array
 */
export const getAllUsers = async () => {
  return await Users.find();
};

/**
 * createUser
 * @params {}
 * @params {post}
 * @returns {Posts}array
 */

export const createUser = async (user) => {
  return await Users.create(user);
};

/**
 * getUserById
 * @params {id}
 * @returns {Posts}array
 */

export const getUserById = async (id) => {
  return await Users.findById(id);
};

/**
 * updateUser
 * @params {id}
 * @returns {Users}array
 */

export const updateUser = async (id, user) => {
  return await Users.findByIdAndUpdate(id, user);
};

/**
 * deleteUser
 * @params {id}
 * @returns {Users}array
 */

export const deleteUser = async (id) => {
  return await Users.findByIdAndDelete(id);
};

/**
 * authUser
 * @params {email}
 * @returns {Users}array
 */

export const authUser = async (email) => {
  return await Users.findOne({ email });
};

/**
 * regUser
 * This is a method t register a user
 * @params {id}
 * @returns {Users}array
 */

export const regUser = async (user) => {
  return await Users.create(user);
};
