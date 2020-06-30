const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");

// Matches with "/api/pets/"
router
  .route("/pets")
  .get((req, res) => UserController.findAll(req, res, db.Pet))
  .post((req, res) => UserController.create(req, res, db.Pet));

module.exports = router;
