const {
  createUser,
  getUsers,
  getOneUser,
  getLogin
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
exports.login = async (req, res) => {
  const { data: retorno, status } = await getLogin(req.body.email, req.body.password );
  res.status(status).json(retorno)
};


