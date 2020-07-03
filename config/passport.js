const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const db = require("../models");

const loginStrategy = require("./loginStrategy");

passport.use("local-login", loginStrategy);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
