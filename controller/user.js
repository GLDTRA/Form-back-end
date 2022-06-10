const {
  createUser,
  getUsers,
  getOneUser
} = require("../Model/user");

exports.create = async (req, res) => {
  const { data: retorno, status } = await createUser(req.body);
  res.status(status).json(retorno);
};
exports.getAll = async (req, res) => {
  const { data: retorno, status } = await getUsers();
  res.status(status).json(retorno);
};
exports.getOne = async (req, res) => {
  const { data: retorno, status } = await getOneUser(req.params.id);
  res.status(status).json(retorno)
};


