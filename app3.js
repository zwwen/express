const express = require("express");
const router = require("./router/index");
const routerVideo = require("./router/video");
const app = express();
app.use("/api", router);
app.use("/video", routerVideo);
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
