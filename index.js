const express = require("express");
const axios = require("axios");
const session = require("express-session");
const app = express();
const port = 8080;

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

app.listen(port, () =>
  console.log(`Server nyala. Alamat http://localhost:${port}`)
);
