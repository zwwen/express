const fs = require("fs");
const { promisify } = require("util");
const { User } = require("../model");
const { createToken } = require("../utils/jwt");
const readName = promisify(fs.rename);
// 用户注册
exports.register = async (req, res) => {
  //   console.log(req.body);
  const user = new User(req.body);
  const dbBack = await user.save();
  const userInfo = dbBack.toJSON();
  delete userInfo.password;
  res.status(200).json({ userInfo });
};

// 用户登录
exports.login = async (req, res) => {
  // 客户端请求的数据验证
  // 连接数据库查询用户
  let dbBack = await User.findOne(req.body);
  if (!dbBack) {
    res.status(402).json({ error: "密码或邮箱不正确" });
  }
  dbBack = dbBack.toJSON();
  dbBack.token = await createToken(dbBack);
  res.status(200).json(dbBack);
};

// 用户信息修改
exports.update = async (req, res) => {
  const id = req.userInfo._id;
  let dbBack = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!dbBack) {
    res.status(402).json({ error: "修改失败" });
  }
  res.status(200).json({ userInfo: dbBack });
};

// 上传用户头像
exports.headImg = async (req, res) => {
  console.log(req.file);
  const fileArr = req.file.originalname.split(".");
  const fileType = fileArr[fileArr.length - 1];
  try {
    await readName(
      "./public/" + req.file.filename,
      "./public/" + req.file.filename + "." + fileType
    );
    res
      .status(200)
      .json({ msg: "上传成功", filePath: req.file.filename + "." + fileType });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.userList = async (req, res) => {
  const { method, url } = req;
  console.log(method, url);
  const user = new User({ name: "Monic", age: 35 });
  const dbBack = await user.save();
  res.send("/user-list");
};
exports.userById = async (req, res) => {
  const { method, url, params } = req;
  console.log(method, url, params);
  res.send(`用户id：${params.id}`);
};
