// Set up MySQL connection.
const mongoose = require("mongoose");

let connection;
if (process.env.MONGODB_URI) {
  connection = mongoose.createConnection(process.env.MONGODB_URI);
} else {
  connection = mongoose.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "h7ub6hs3l66dc07q"
  });
}

// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
