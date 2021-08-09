/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
// Schema definition
const Mongoose = require("mongoose");

const PostSchema = new Mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("PostModel", PostSchema);
