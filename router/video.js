const express = require("express");
const videoController = require("../controller/video");
const router = express.Router();
router
  .get("/list", videoController.videoList)
  .get("/list/:id", videoController.videoById);

module.exports = router;
