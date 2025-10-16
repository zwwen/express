const express = require("express");
const { getDb, saveDb } = require("./db");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
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
  try {
    const back = await getDb();
    res.send(back);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.post("/", async (req, res) => {
  const { headers, body } = req;
  //   console.log(headers["content-type"]);
  //   console.log(body);
  try {
    const data = await getDb();
    body.id = data.users[data.users.length - 1].id + 1;
    data.users.push(body);
    await saveDb(data);
    res.status(200).send({
      code: 1,
      msg: "添加成功",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: "添加失败",
      error,
    });
  }
});
app.put("/:id", async (req, res) => {
  try {
    const back = await getDb();
    const userId = Number.parseInt(req.params.id);
    let user = back.find((user) => user.id === userId);
    if (!user) {
      res.status(403).json({
        code: 0,
        msg: "用户不存在",
      });
    }
    const body = req.body;
    user = {
      ...user,
      ...body,
    };
    back[userId - 1] = user;
    console.log(userId, user, back);
    const result = await saveDb(back);
    if (!result) {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: "更新失败",
      error,
    });
  }
});
app.listen(9999, () => {
  console.log("服务启动成功：127.0.0.1:9999");
});
