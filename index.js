const express = require("express");
require("dotenv").config();
const app = express();
const middleware = require("./middleware");
const router = require("./routes");

app.set("view engine", "ejs");
app.use(middleware);
app.use(router);

app.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Server nyala. Alamat http://localhost:${process.env.SERVER_PORT}`
  )
);
