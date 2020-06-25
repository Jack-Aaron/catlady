const mongoose = require("mongoose"),
  db = require("../models");

const connStr = "mongodb://localhost:27017/mongoose-bcrypt-test";
mongoose.connect(connStr, (err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to MongoDB");
});

// create a user a new user
const testUser = new db.User({
  username: "BrianLFarmer",
  password: "SuperPassWord",
});

db.User.remove({}).then(
  testUser.save((err) => {
    if (err) {
      throw err;
    }
  })
);
