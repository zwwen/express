const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

exports.getDb = async () => {
  try {
    const back = await readFile("./data.json", "utf-8");
    return JSON.parse(back);
  } catch (error) {
    console.log(error);
  }
};
exports.saveDb = async (data) => {
  try {
    const back = await writeFile("./data.json", JSON.stringify(data));
    return back;
  } catch (error) {
    console.log(error);
  }
};
