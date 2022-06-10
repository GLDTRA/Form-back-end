const { getAll, create, getOne, login } = require("../controller/user");
const { validateCreate, validateErrorUser, validateDuplicatedEmail, validateLogin} = require("../middleware/users");
const { getOneUser } = require("../Model/user");

//next : ir para o próximo
//res : resposta
//req : requisição

module.exports = (app) => {
  app.get("/user", getAll);
  app.post("/user", validateCreate, validateErrorUser, validateDuplicatedEmail, create);
  app.get("/user/:id", getOne);
  app.post('/user/login',validateLogin, validateErrorUser, login)
};