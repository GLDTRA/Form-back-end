const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./routes/users");
routes(app);
app.listen(3000, () =>
console.log(`Servidor está operando no link:  http://localhost:3000`))