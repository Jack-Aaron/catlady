const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");

// Matches with "/api/user/"
router
  .route("/")
  .get((req, res) => UserController.findAll(req, res, db.User))
  .post((req, res) => UserController.create(req, res, db.User));

module.exports = router;
