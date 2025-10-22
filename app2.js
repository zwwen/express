const express = require("express");
const PORT = process.env.PORT || 9999;
const app = express();
app.use(express.urlencoded());
app.use(express.json());
// const logs = (req) => {
//   const { method, url } = req;
//   console.log(`方法：${method}`);
//   console.log(`路径：${url}`);
//   console.log(`时间：${Date.now()}`);
// };
// 全局应用程序级别的中间件
app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`方法：${method}`);
  console.log(`路径：${url}`);
  console.log(`时间：${Date.now()}`);
  next();
});
// app.get("/", (req, res) => {
//   fs.readFile("./data1.json", "utf-8", (err, data) => {
//     if (!err) {
//       const back = JSON.parse(data);
//       res.send(back);
//     } else {
//       res.status(500).json(err);
//     }
//   });
// });
app.get("/", async (req, res) => {
  // const { method, url } = req;
  // console.log(`方法：${method}`);
  // console.log(`路径：${url}`);
  // console.log(`时间：${Date.now()}`);
  // logs(req);
  res.send("/index");
});
app.get("/register", async (req, res) => {
  // const { method, url } = req;
  // console.log(`方法：${method}`);
  // console.log(`路径：${url}`);
  // console.log(`时间：${Date.now()}`);
  // logs(req);
  res.send("/register");
});
app.get("/login", async (req, res) => {
  // const { method, url } = req;
  // console.log(`方法：${method}`);
  // console.log(`路径：${url}`);
  // console.log(`时间：${Date.now()}`);
  // logs(req);
  res.send("/login");
});
app.post("/", async (req, res) => {
  // const { headers, body } = req;
  //   console.log(headers["content-type"]);
  //   console.log(body);
});
app.put("/:id", async (req, res) => {});
app.listen(PORT, () => {
  console.log(`服务启动成功：127.0.0.1:${PORT}`);
});
