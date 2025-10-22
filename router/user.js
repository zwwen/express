const express = require("express");
const userController = require("../controller/user");
const router = express.Router();
const validatorUser = require("../middleWare/validator/validatorUser");
const { verifyToken } = require("../utils/jwt");
router
  .post("/registers", validatorUser.register, userController.register)
  .post("/logins", validatorUser.login, userController.login)
  .get("/list", verifyToken, userController.userList)
  .get("/list/:id", verifyToken, userController.userById);

module.exports = router;
