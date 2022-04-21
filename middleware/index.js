const router = require("express").Router();
const express = require("express");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("../lib/passport-local");
const flash = require("express-flash");

router.use(logger("dev"));
router.use(express.static(path.join(__dirname, "../public")));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(methodOverride("_method"));
router.use(cookieParser());
router.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());
router.use(flash());

module.exports = router;
