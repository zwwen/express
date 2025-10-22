const crypto = require("crypto");
// const str = crypto.createHash("md5").update("abc").digest("hex");
// console.log(str);
module.exports = (str) =>
  crypto
    .createHash("md5")
    .update("myang" + str)
    .digest("hex");
