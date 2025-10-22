exports.videoList = async (req, res) => {
  const { method, url } = req;
  console.log(method, url);
  res.send("/video-list");
};
exports.videoById = async (req, res) => {
  const { method, url, params } = req;
  console.log(method, url, params);
  res.send(`指定视频id：${params.id}`);
};
