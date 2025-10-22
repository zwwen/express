const express = require("express");
// 解决跨域中间件
const cors = require("cors");
// 日志记录中间件
const morgan = require("morgan");
// 引入路由
const router = require("./router");
const app = express();
// 使用中间件
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1", router);
// 所有路由匹配不到的中间件
app.use((req, res, next) => {
  res.status(404).send("404 Not Found.");
});
// 错误处理中间件
app.use((error, req, res, next) => {
  res.status(500).send("Service Error.");
});
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`服务启动成功：127.0.0.1:${PORT}`);
});
