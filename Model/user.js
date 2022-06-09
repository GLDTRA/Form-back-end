const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt"); 
const { connectMongodb } = require("./database/connect");

exports.createUser = async ({login, password }) => {
  const hashPassword = await bcrypt.hash(password, 5)
  const collection = await connectMongodb("quizz", "usuarios");
  const { insertResult } = await collection.insertOne({ login, hashPassword});
  return { data: { _id: insertResult, login, hashPassword}, status: 201 };
};

exports.getUsers = async () => {
  const collection = await connectMongodb("quizz", "usuarios");
  const data = await collection.find().toArray();
  return { data, status: 200 };
};
  
exports.getLogin = async (login, hashPassword) => {
  const collection = await connectMongodb("quizz", "usuarios");
  const dataLogin = await collection.findOne({ login });
  return { data:{login, hashPassword} ,status: 200 };
}

