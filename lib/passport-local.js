const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { user_game } = require("../models");

const authenticate = async (username, password, done) => {
  try {
    const user = await user_game.authenticate({ username, password });
    return done(null, user);
  } catch (err) {
    return done(null, false, { message: err.message });
  }
};

passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    authenticate
  )
);

passport.serializeUser((user, done) => done(null, user.user_id));
passport.deserializeUser(async (user_id, done) =>
  done(null, await user_game.findByPk(user_id))
);

module.exports = passport;
