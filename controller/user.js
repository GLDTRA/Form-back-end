const { ObjectID } = require("bson");
const { ObjectId } = require("mongodb");
const {
  createUser,
  getUsers
} = require("../Model/user");
exports.getAll = async (req, res) => {
  const { data: retorno, status } = await getUsers();
  res.status(status).json(retorno);
};
exports.getLogin = async (req, res) => {
  const { data: retorno, status } = await getLogin(req.body.login);
  res.status(status).json(retorno)
};


exports.create = async (req, res) => {
  const { data: retorno, status } = await createUser(req.body);
  res.status(status).json(retorno);
};

