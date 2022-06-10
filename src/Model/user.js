const bcrypt = require("bcrypt"); 
const { ObjectId } = require("mongodb");
const { connectMongodb } = require("./database/connect");

exports.createUser = async ({name, email, password }) => {
  const hashPassword = await bcrypt.hash(password, 5)
  const collection = await connectMongodb("quizz", "usuarios");
  const { insertedId } = await collection.insertOne({ name, email, hashPassword});
  return { data: { _id: insertedId, email, hashPassword}, status: 201 };
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
exports.getUserbyEmail = async (email) => {
  const collection = await connectMongodb("quizz", "usuarios");
  const data = await collection.findOne({ email });
  return { data, status: 200 };
}

exports.login = async (email, password) => {
  const collection = await connectMongodb("quizz", "usuarios");
  const user = await collection.findOne({email});
  if(user) {
    const compare = await bcrypt.compare(password, user.hashPassword);
    if(compare) {
      return { data:{user, compare}, status: 200 };
    }
  }else {
    return { data: { message: "E-mail ou senha inválidos"}, status: 401 };
  }

}

 

