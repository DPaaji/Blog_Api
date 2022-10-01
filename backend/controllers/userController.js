import expressAsyncHandler from "express-async-handler";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  authUser,
  regUser,
} from "../services/userServices.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/token.js";

/**
 * getUsers is a method to get all users data at once
 * @params {*} req
 * @params {*all users detail } res
 */
export const getUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ data: users, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * fetchUserById is a method to get user data via Id
 * @params {*put user id to fetch the user data from the database} req
 * @params {*} res
 */
export const fetchUserById = expressAsyncHandler(async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * constructUser is a method to create/post user Data
 * @params {to create a user} req
 * @params {*} res
 */
export const constructUser = expressAsyncHandler(async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.json({ data: user, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * eraseUser is a method to delete user Data
 * @params {delete user data by id} req
 * @params {*} res
 */
export const eraseUser = expressAsyncHandler(async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * userUpdate
 * This is a  method to update user details
 *
 * @params {Object} req
 * @params {Object} res
 *
 * @return {Object} user
 */
// export const userUpdate = expressAsyncHandler(async) (req, res) => {
//   try {
//     const user = await updateUser(req.params.id, req.body);
//     res.json({ data: user, status: "success" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

/**userAuthorization
 *This creates a method to check user's password from the database password
 * @params {check whether or not the email and password of user is similar to of database} req
 * @params {*sent generated  token} res
 */
export const userAuthorization = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authUser(email);
    if (user && (await user.matchPassword(password))) {
      const Token = generateToken(user.id);
      res.json({ Token });
    }
  } catch (error) {
    console.log(error.message);
  }
});

/**registerUser
 *This is a method to check user's password from the database password
 * @params {check whether or not the email and password of user is similar to of database} req
 * @params {*sent generated  token} res
 */

export const registerUser = expressAsyncHandler(async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await authUser(email);
    if (!user) {
      const newUser = await regUser(req.body);
      const newUserId = newUser._id;
      res.json({
        token: jwt.sign({ newUserId }, process.env.SECRET_KEY, {
          expiresIn: "3d",
        }),
      });
    } else {
      res.status(409).json("already exists");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// export const softDeleteUser = async (req, res) => {
//   try {
//     const { isActive } = req.body;
//     const user = await updateUser(req.params.id, isActive);
//     res.json({ data: user, status: "success" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

/**softDeleteUser
 *This is a method to check user's password from the database password
 * @params {check whether or not the email and password of user is similar to of database} req
 * @params {*sent generated  token} res
 */

export const softDeleteUser = expressAsyncHandler(async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (error) {
    console.log("error", error.message);
  }
});
