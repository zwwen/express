const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const clientFun = async (name = "myang", collectionName = "user") => {
  await client.connect();
  const myangDb = client.db(name);
  return myangDb.collection(collectionName);
};
const main = async () => {
  const cc = await clientFun("myang", "user");
  //   const d = await cc.insertOne({ name: "monic", age: 40 });
  //   const d = await cc.insertMany([
  //     { name: "monic", age: 40 },
  //     { name: "kaka", age: 20 },
  //     { name: "C罗", age: 18 },
  //   ]);
  //   const d = await cc.deleteOne({ name: "monic" });
  //   const d = await cc.updateOne({ age: { $gt: 18 } }, { $set: { name: "Ai" } });
  //   console.log(d);

  const d = await cc.find();
  console.log(await d.toArray());
};
main().finally(() => client.close());
