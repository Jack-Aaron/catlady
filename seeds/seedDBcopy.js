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
const testUser = {
  username: "jmar777",
  password: "Password123",
};

// save user to database
// db.User.remove({})
//   .then(() =>
db.User.collection
  .insertOne(testUser)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// fetch user and test password verification
db.User.collection.findOne({ username: "jmar777" }, (err, user) => {
  if (err) {
    throw err;
  }

  // test a matching password
  user.comparePassword("Password123", (err, isMatch) => {
    if (err) {
      throw err;
    }
    console.log("Password123:", isMatch); // -&gt; Password123: true
  });

  // test a failing password
  user.comparePassword("123Password", (err, isMatch) => {
    if (err) {
      throw err;
    }
    console.log("123Password:", isMatch); // -&gt; 123Password: false
  });
});
