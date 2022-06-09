const { getAll, create, getLogin } = require("../controller/user");
const { validateCreate, validateErrorUser, validateDuplicatedEmail, paramsId} = require("../middleware/users");

//next : ir para o próximo
//res : resposta
//req : requisição

module.exports = (app) => {
  app.get("/user", getAll);
  app.post("/user", validateCreate, validateErrorUser, validateDuplicatedEmail, create);
  app.get("/user/:id", paramsId, validateErrorUser, validateFoundById, getLogin);
};