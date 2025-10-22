const express = require("express");
const user = require("./user");
const video = require("./video");
const router = express.Router();
router.use("/user", user);
router.use("/video", video);

module.exports = router;
