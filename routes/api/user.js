const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");

// Matches with "/api/user"
router
  .route("/")
  .get((req, res) => UserController.findAll(req, res, db.User))
  .post(UserController.create);

module.exports = router;
