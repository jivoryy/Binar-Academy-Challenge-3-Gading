const router = require("express").Router();
const express = require("express");
const session = require("express-session");

router.use(express.static("public"));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(
  session({
    secret: "my-so-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

module.exports = router;
