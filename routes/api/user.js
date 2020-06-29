const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");
const passport = require("../../config/passport");

// Matches with "/api/user/"
router
  .route("/")
  .get((req, res) => UserController.findAll(req, res, db.User))
  .post((req, res) => UserController.create(req, res, db.User));

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    username: req.user.username,
    id: req.user.id,
  });
});

module.exports = router;
