const mongoose = require("mongoose");
const md5 = require("../utils/md5");
const base = require("./base");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value), // 加密
    select: false, // 查询的时候不返回
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  ...base,
});

module.exports = UserSchema;
