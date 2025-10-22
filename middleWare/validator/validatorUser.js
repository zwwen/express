const { body } = require("express-validator");
const validator = require("./errorBack");
const { User } = require("../../model");
module.exports.register = validator([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 3, max: 12 })
    .withMessage("用户名长度限制3-12字符")
    .bail(),
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .bail()
    .isLength({ min: 6, max: 20 })
    .withMessage("用户名长度限制6-20字符")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .bail()
    .isEmail()
    .withMessage("邮箱格式有误")
    .bail()
    .custom(async (value) => {
      const emailValidate = await User.findOne({ email: value });
      if (emailValidate) {
        return Promise.reject("邮箱已被注册");
      }
    })
    .bail(),
  body("phone")
    .notEmpty()
    .withMessage("手机号不能为空")
    .bail()
    .isMobilePhone()
    .withMessage("手机格式有误")
    .bail()
    .custom(async (value) => {
      const phoneValidate = await User.findOne({ phone: value });
      if (phoneValidate) {
        return Promise.reject("手机号已被注册");
      }
    })
    .bail(),
  body("age").notEmpty().withMessage("年龄不能为空").bail(),
]);
module.exports.login = validator([
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .bail()
    .isLength({ min: 6, max: 20 })
    .withMessage("用户名长度限制6-20字符")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .bail()
    .isEmail()
    .withMessage("邮箱格式有误")
    .bail()
    .custom(async (value) => {
      const emailValidate = await User.findOne({ email: value });
      if (!emailValidate) {
        return Promise.reject("邮箱未注册");
      }
    })
    .bail(),
]);
