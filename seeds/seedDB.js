const mongoose = require("mongoose"),
  db = require("../models");

const connStr = "mongodb://localhost/catlady";
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
  testUser
    .save()
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);
