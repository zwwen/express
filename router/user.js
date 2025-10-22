const express = require("express");
const multer = require("multer");
const userController = require("../controller/user");
const router = express.Router();
const validatorUser = require("../middleWare/validator/validatorUser");
const { verifyToken } = require("../utils/jwt");
const upload = multer({ desc: "/public" });
router
  .post("/registers", validatorUser.register, userController.register)
  .post("/logins", validatorUser.login, userController.login)
  .put("/update", verifyToken, validatorUser.update, userController.update)
  .post(
    "/headImg",
    verifyToken,
    upload.single("headImg"),
    userController.headImg
  )
  .get("/list", verifyToken, userController.userList)
  .get("/list/:id", verifyToken, userController.userById);

module.exports = router;
