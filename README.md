# Node.js：它不是一种独立的编程语言，也不是 JavaScript 框架，而是一个 JavaScript 运行环境

# 安装对应系统的 nodejs 长期稳定版本，它会默认安装 npm 包管理工具

# nvm（Node Version Manager）：用于管理多个 Node.js 版本。它的安装主要包括下载安装包、运行安装程序、验证安装、配置镜像源和环境变量等步骤，常用命令：

    - nvm -v 查看nvm版本
    - nvm install [version] 安装指定版本的node
    - nvm list 查看已安装的node版本
    - nvm use [version] 使用指定版本的node

# pm2 是一个带有负载均衡功能的 Node.js 应用进程管理器。它可以帮助你管理和保持你的 Node.js 应用在线。使用：npm install pm2 -g 安装，常用命令：

    - pm2 -v 查看当前pm2版本
    - pm2 start app.js 启动应用
    - pm2 stop app_name_or_id 停止应用
    - pm2 restart app_name_or_id 重启应用
    - pm2 delete app_name_or_id 删除应用
    - pm2 list 列出所有应用
    - pm2 logs 查看应用日志

# 什么是脚手架工具

    - 首先它肯定是一个全局命令行执行工具
    - 其次它是用来创建项目初始化代码文件及目录的

# 脚手架要具备的基本能力有哪些

    - 全局命令行执行能力
    - 命令行交互能力
    - 项目初始化代码及项目目录的下载能力

# 实现一个自己的脚手架工具的基本流程

    - 创建自定义的全局命令(不能喝系统现有的重名)
        -- 首先新建一个bin文件夹
        -- 其次在bin文件夹下面新建一个js文件
        -- 然后在与bin文件夹同级的目录下初始化项目：npm init
        -- 然后在当前项目的根目录下执行 npm link 从而使其挂载到全局命令行工具中
        -- 最后在bin文件夹下的js文件中编辑代码脚本 `#! /usr/bin/env node`
    - 命令行参数接收处理
        -- node提供的api可以帮助拿到在命令行中输入的参数：process.argv
        -- 推荐使用第三方工具包 命令参数处理工具 commander
        -- 使用 commander 工具来处理自定义命令参数
    - 终端交互
        -- 使用第三方工具包 命令行交互工具 inquirer
    - 下载远程项目代码
        -- 使用第三方工具包下载远程仓库中的代码模板 download-git-repo
    - 项目初始化完成的提示
        -- 使用第三方工具包下载等待提示交互工具 ora@5
        -- 使用第三方工具包命令行样式渲染工具 chalk@4

# 进程和线程的区别

- 进程是操作系统资源分配的原本单位，进程中包含线程
- 线程是由进程所管理的，为了提升浏览器的稳定性和安全性，浏览器采用了多进程模型
- 浏览器进程：负责界面显示、用户交互、子进程管理、提供存储等
- GPU 进程：硬件加速、3d 绘制、提高性能、提高体验
- 渲染进程：每个页卡都有单独的渲染进程，核心是用于渲染页面
  > 它里面管理着 GUI 渲染线程、js 引擎线程、事件触发线程
- 网络进程：主要处理网络资源加载(html、css、js 等)
- 插件进程：chrome 中安装的一些插件

# 浏览器事件环

- (每个进程互相不影响) 而且可以协同工作 进程(计算机分配任务和调度任务的最小单位) -> 线程
- 浏览器事件环(js 是单线程的) 主线程只有一个 setTimeout / setInterval / ajax / requestFrameAnimation / 事件；内部使用事件环来实现任务的调度

# 宏任务&微任务

- 微任务：promise.then / MutationObserver / process.nextTick
- 宏任务：script / ajax / 事件 / setTimeout / setInterval / setImmediate(ie 下) / MessageChannel / IO / requestFrameAnimation / UI 渲染
- 微任务会比宏任务快，js 中会先执行 script 脚本

# node 是什么、可以做什么、

- 它是 js 在服务端的运行环境 也可以说是运行时(runtime)
- 它是单进程 单线程(主线程) 可以开子进程
- 单线程好处：高并发 i/o 密集(文件读写、接口处理等)；不适合 cpu 密集
- 它可以写些脚本、中间层 服务端渲染 可以实现前后端分离 实现高性能的 web 服务
- 多线程在单核 cpu 中其实也是顺序执行的，不过系统可以帮你切换哪个执行而已，没有提高速度
- 多核 cpu 的话就可以在多个 cpu 中同时执行
- 单线程的优点：解决切换上下文事件、节省内存(多线程)、锁的问题
- node 的主进程在开多个子进程，里面包含着一个线程

# 同步、异步(针对被调用方) / 阻塞、非阻塞(针对调用方)

# node 全局对象 global 默认可以直接使用的不用声明的对象

# node 中的事件环

- node10 版本以前和浏览器不一样；node11 之后就和浏览器表现形式一样了；但是执行顺序和浏览器还是有差别的

# 基于 node 创建 web 服务

    - 主要是基于原生模块 http

# 基于 Express 创建 web 项目

    - 初始化项目：npm init -y
    - 安装express：npm i express
    - 安装跨域中间件：npm i cors
    - 安装日志记录中间件：npm i morgan
    - 安装mongoose数据库：npm i mongoose
    - 使用crypto对敏感数据加密
    - 安装express-validator对提交数据做校验：npm i express-valitor
    - 安装jsonwebtoken用来做身份认证：npm i jsonwebtoken

# mongodb 的使用：

    - 安装mongodb后想要在命令行中使用，需要安装mongo shell并配置环境变量。建议使用 `Navicat` 来配置一起使用
    - 数据结构：
      -- 数据库(Database)
      -- 集合(Collection)：对应关系型数据库中的 Table
      -- 文档(Document)：对应关系型数据库中的 Row
      -- 数据(data)：采用键值对的方式来存储数据，对应关系型数据库中的 Column
    - 查看所有库的列表：show dbs
    - 切换数据库：use 数据库名字
    - 查看当前是在哪个库中：db
    - 创建库：除了直接在Navicat中操作以外，可以使用 use 数据库名，如果不存在这个数据库，那么他就会被创建，但是目前只是在内存中，需要往这个数据库中存储数据后才能看到
    - 删除库：需要切换到需要删除的库下 使用 db.dropDatabase() 属于自杀式删库
    - 创建集合：db.createCollection(name：要创建的集合名称, options：可选参数, 指定有关内存大小及索引的选项)
        -- capped：布尔值，是否创建一个固定大小的集合。	true
        -- size：数值，集合的最大大小（以字节为单位）。仅在 capped 为 true 时有效。	10485760 (10MB)
        -- max：数值，集合中允许的最大文档数。仅在 capped 为 true 时有效。	5000
        -- validator：对象，用于文档验证的表达式。{ $jsonSchema: { ... }}
        -- validationLevel：字符串	指定文档验证的严格程度。
                --- "off"：不进行验证。
                --- "strict"：插入和更新操作都必须通过验证（默认）。
                --- "moderate"：仅现有文档更新时必须通过验证，插入新文档时不需要。	"strict"
        -- validationAction：字符串	指定文档验证失败时的操作。
                --- "error"：阻止插入或更新（默认）。
                --- "warn"：允许插入或更新，但会发出警告。	"error"
        -- storageEngine：对象，为集合指定存储引擎配置。 { wiredTiger: { ... }}
        -- collation：对象，指定集合的默认排序规则。{ locale: "en", strength: 2 }

```javascript
db.createCollection("myComplexCollection", {
  capped: true,
  size: 10485760,
  max: 5000,
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "必须为字符串且为必填项",
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "必须为有效的电子邮件地址",
        },
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
  storageEngine: {
    wiredTiger: { configString: "block_compressor=zstd" },
  },
  collation: { locale: "en", strength: 2 },
});
```

    - 更新集合名：db.adminCommand({
            renameCollection: "要重命名的集合的完全限定名称（包括数据库名）",
            to: "目标集合的完全限定名称（包括数据库名）",
            dropTarget: 布尔值。如果目标集合已经存在，是否删除目标集合。默认值为 false
        })

    - 删除集合：db.集合名.drop()
    - 查看集合：show collections
    - 添加数据集合：db.集合名.insert({x:1, y:2}) mongodb 会默认给数据添加一个字段“_id”并且是一个ObjectId类型
    - 插入一条数据：db.集合名.insertOne({x:1, y:2})
    - 插入多条数据：db.集合名.insertMany([{x:1, y:2},{w:1, h:2}])
    - 更新满足条件的一条数据：db.集合名.updateOne({ name:"Alice" }, // 过滤条件
    { $set: { age: 26 } }, // 更新操作
    { upsert: false } // 可选参数)
    - 更新满足条件的多条数据：db.集合名.updateMany(
        { age: { $lt: 30 } },             // 过滤条件
        { $set: { status: "active" } },   // 更新操作
        { upsert: false }                  // 可选参数
    );
    - 删除一条数据：db.集合名.deleteOne({ name: "Alice" });
    - 删除多条数据：db.集合名.deleteMany({ status: "inactive" });
    - 查询一条数据：db.集合名.findOne(查询条件)
    - 查询多条数据：db.集合名.find(查询条件) 如果没有查询条件就是查询当前集合下面的所有数据；find方法中的查询条件也是一个键值对形式的对象
        -- 查询条件：
            1、$eq：等于 db.user.find({age: {$eq:15}}) 返回年龄等于15的数据
            2、$ne：不等于 db.user.find({age: {$ne:15}}) 返回年龄不等于15的数据
            3、$gt：大于 db.user.find({age: {$gt:15}}) 返回年龄大于15的数据
            4、$gte：大于等于 db.user.find({age: {$gte:15}}) 返回年龄大于等于15的数据
            5、$lt：小于 db.user.find({age: {$lt:15}}) 返回年龄小于15的数据
            6、$lte：小于等于 db.user.find({age: {$lte:15}}) 返回年龄小于等于15的数据
            7、$in：在指定的数组中 db.user.find({age: {$in:[15,20,25]}}) 返回年龄在条件数组中的数据
            8、$nin：不在指定的数组中 db.user.find({age: {$nin:[15,20,25]}}) 返回年龄不在条件数组中15的数据

# express 中间件分类

- 应用程序级别中间件
- 路由级别中间件
- 错误处理中间件
- 内置中间件
- 第三方中间件
- 自定义中间件

# 接口说明

- 基于`RESTful API` 接口规范
- 基于`JWT` 进行身份认证
- 使用`CORS` 处理跨域问题
- 接口基础请求地址：`http://127.0.0.1:9999/api/v1`
- 使用`JSON` 格式进行数据通信

## 用户注册

-- 请求路径：`/user/registers`
-- 请求方法： `post`
-- 是否认证：`否`

```json
// 請求示例
{
  username: '',
  password: '',
  email: '',
  phone: '',
  age: ''
}
// 响应示例：
成功：
{"userInfo":{"username":"wwqq","email":"qqq@qq.com","phone":"12345678901","age":11,"image":null,"_id":"68f8379ac15a6668dc8f6250","createAt":"2025-10-22T01:47:06.685Z","updateAt":"2025-10-22T01:47:06.685Z","__v":0}}
失败：
{"error":[{"type":"field","value":"xxx@qq.com","msg":"邮箱已被注册","path":"email","location":"body"}]}
```
