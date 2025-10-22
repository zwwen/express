const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { privateKey } = require("../config");
const toJWT = promisify(jwt.sign);
const verifyJWT = promisify(jwt.verify);
module.exports.createToken = async (payload) => {
  return await toJWT({ payload }, privateKey, { expiresIn: "7d" });
};
module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  token = token ? token.split("Bearer ")[1] : null;
  if (!token) {
    res.status(401).json({ error: "请先注册登录" });
  }
  try {
    let userInfo = await verifyJWT(token, privateKey);
    req.userInfo = userInfo;
    next();
  } catch (error) {
    res.status(401).json({ error: "无效的token" });
  }
};
