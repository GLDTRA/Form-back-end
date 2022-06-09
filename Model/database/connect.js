const { MongoClient } = require("mongodb");
const url =
  "mongodb://localhost:27017";
const client = new MongoClient(url);

exports.connectMongodb = async (quizz, usuarios) => {
  await client.connect();
  const db = client.db(quizz);
  return db.collection(usuarios);
};