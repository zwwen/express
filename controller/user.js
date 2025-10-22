const { User } = require("../model");
const { createToken } = require("../utils/jwt");
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
    res.status(402).json({ erroe: "密码或邮箱不正确" });
  }
  dbBack = dbBack.toJSON();
  dbBack.token = await createToken(dbBack);
  res.status(200).json(dbBack);
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
