import mongoose from "mongoose";

/**
 * commentSchema
 * This is a Schema method which gives a standard and validation to store comments' data at mongoDB.
 */

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      minLength: [1, "minimum length is 1"],
      maxLength: [400, "maximum length is 400"],
      required: true,
      trim: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

const Comments = mongoose.model("Comments", commentSchema);
export default Comments;
