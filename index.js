const express = require("express");
const session = require("express-session");
require("dotenv").config();
const app = express();
const users = require("./routes/users_routes");
const games = require("./routes/games_routes");
const admin = require("./routes/admin_routes");
const APIroute = require("./routes/api_routes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my-so-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.render("home", {
    username: req.session.username,
    is_admin: req.session.is_admin,
  });
});

app.use("/admin", admin);
app.use("/users", users);
app.use("/games", games);
app.use("/api", APIroute);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page doesn't exist. Please double-check your URL.",
  });
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(
    `Server nyala. Alamat http://localhost:${process.env.SERVER_PORT}`
  )
);
