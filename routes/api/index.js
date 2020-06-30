const router = require("express").Router();
const userRoutes = require("./user");
const petRoutes = require("./pets")

// Pet routes
router.use("/user", userRoutes);
router.use("/pet", petRoutes);
router.use("/petfood", petRoutes);
router.use("/newPet", petRoutes);

module.exports = router;
