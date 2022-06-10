const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const routes = require("./routes/users");
routes(app);
app.listen(3100, () =>
console.log(`Servidor está operando no link:  http://localhost:3100`))