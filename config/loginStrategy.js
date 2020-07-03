const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

const loginStrategy = new LocalStrategy((username, password, done) => {
  db.User.findOne({ username: username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {
        message: "Incorrect username or password.",
      });
    }
    if (!user.comparePassword(password)) {
      return done(null, false, {
        message: "Incorrect username or password.",
      });
    }
    return done(null, user);
  });
});

module.exports = loginStrategy;
