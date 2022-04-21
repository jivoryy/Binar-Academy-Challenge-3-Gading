const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const middleware = require("./middleware");
const router = require("./routes");

app.use(middleware);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(router);

module.exports = app;
