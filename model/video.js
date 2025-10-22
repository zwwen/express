const mongoose = require("mongoose");
const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  star: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
});

module.exports = VideoSchema;
