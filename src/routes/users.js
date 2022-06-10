const { getAll, create, getOne, login } = require("../controller/user");
const { validateCreate, validateErrorUser, validateDuplicatedEmail} = require("../middleware/users");
const { getOneUser } = require("../Model/user");

//next : ir para o próximo
//res : resposta
//req : requisição

module.exports = (app) => {
  app.post("/user", getAll);
  app.post("/user", validateCreate, validateErrorUser, validateDuplicatedEmail, create);
  app.get("/user/:id", validateErrorUser, getOne);
  app.get('login', login)
};