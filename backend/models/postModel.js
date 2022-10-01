import mongoose from "mongoose";

/**
 * postSchema
 * This is a Schema method which gives a standard and validation to store post data in the database.
 */

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: [4, "minimum characters length should be 4"],
      maxLength: [120, "maximum length should be 120 characters"],
      trim: true,
    },
    content: {
      type: String,
      maxLength: 6000,
      minLength: 4,
      required: [true, "post title is required"],
      trim: true,
    },
    imageUrl: {
      type: [String],
      required: [true, "image is required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: false,
    },
    updatedBy: {
      slug: {
        type: String,
        trim: false,
      },
    },
    status: {
      type: [String],
      enum: ["DRAFT", "PUBLISH"],
    },
  },
  { timestamps: { createdAt: true, updatedAt: false }, versionKey: false }
);

/**
 * middleware method
 * called before saving any record
 */
// postSchema.pre("save", async function (next) {
//   this.slug = convertToSlug(this.title);
//   next();
// });

const Posts = mongoose.model("Post", postSchema);
export default Posts;
