const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");
const passport = require("../../config/passport");

// Matches with "/api/user/"
router
  .route("/")
  .get((req, res) => UserController.findAll(req, res, db.User))
  .post((req, res) => UserController.create(req, res, db.User));

router
  .route("/pets")
  .get((req, res) => UserController.findByUserId(req, res, db.Pet))
  .post((req, res) => UserController.create(req, res, db.Pet));

router
  .route("/petfood")
  .post((req, res) => UserController.create(req, res, db.PetFood))
  .get((req, res) => UserController.findAll(req, res, db.PetFood));

router
  .route("/petfood/:name")
  .get((req, res) => UserController.findOne(req, res, db.PetFood));

router
  .route("/login")
  .post(passport.authenticate("local-login"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      _id: req.user.id,
    });
  });

router.route("/logout").get((req, res) => {
  req.logout();
  res.json({});
});

// route for retrieving info of current signed in user and for isAuth component
router.route("/currentuser").get((req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({
      username: "",
      id: "",
    });
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user._id,
    });
  }
});

module.exports = router;
