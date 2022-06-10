const bcrypt = require("bcrypt"); 
const { ObjectId } = require("mongodb");
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

exports.getOneUser = async (id) => {
  const collection = await connectMongodb("quizz", "usuarios");
  const data = await collection.findOne({ _id: ObjectId(id) });
  return { data, status: 200 };
};
exports.getUserbyEmail = async (login) => {
  const collection = await connectMongodb("quizz", "usuarios");
  const data = await collection.findOne({ login });
  return { data, status: 200 };
}

exports.getLogin = async (email, password) => {
  const collection = await connectMongodb("quizz", "usuarios");
  const dataLogin = await collection.findOne({email});
const compare = await bcrypt.compare(password,dataLogin.hashePassaword)
  return { data:{dataLogin, compare} ,status: 200 };
}

 

