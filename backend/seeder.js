import connectDB from "./config/db.js";

import Comments from "./models/commentsModel.js";
import Posts from "./models/postModel.js";
import Users from "./models/userModel.js";

import CommentsData from "./seeder-data/comments.seeder.data.js";
import PostsData from "./seeder-data/post.seeder.data.js";
import usersData from "./seeder-data/user.seeder.data.js";

/**importData
 *This is a method that imports Data to
 */
export const importData = async () => {
  connectDB();
  try {
    //delete
    await Users.deleteMany();
    await Posts.deleteMany();
    await Comments.deleteMany();
    ///insert
    const users = await Users.insertMany(usersData);
    const updatedPosts = PostsData.map((obj) => ({
      ...obj,
      createdBy: users[0]._id,
    }));
    const posts = await Posts.insertMany(updatedPosts);
    const updatedComments = CommentsData.map((object) => ({
      ...object,
      createdBy: users[0]._id,
      postId: posts[0]._id,
    }));
    const comments = await Comments.insertMany(updatedComments);
    console.log("success");
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

/**
 *deleteData
 * This method deletes data
 */
export const deleteData = async () => {
  connectDB();
  try {
    //delete data
    await Users.deleteMany();
    await Posts.deleteMany();
    await Comments.deleteMany();
    console.log("Data deleted successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
console.log(process.argv);
if (process.argv[2] === "-D") {
  deleteData();
} else {
  importData();
}
