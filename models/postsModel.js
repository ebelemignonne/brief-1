const mongoose = require("mongoose");
//model d'une base de donnée
const PostsModel = mongoose.model(
  "test",
  {
    author: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  "enanga"
);

module.exports = { PostsModel};