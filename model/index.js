const mongoose = require("mongoose");
const { monboPath } = require("../config");
const UserSchema = require("./user");
const VideoSchema = require("./video");
async function main(dbname = "myang") {
  await mongoose.connect(`${monboPath}${dbname}`);
}
main()
  .then((res) => {
    console.log("mongo连接成功");
  })
  .catch((err) => console.log(err));

module.exports = {
  User: mongoose.model("User", UserSchema),
  Video: mongoose.model("Video", VideoSchema),
};
