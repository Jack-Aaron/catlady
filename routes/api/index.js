const router = require("express").Router();
const userRoutes = require("./user");

// Book routes
router.use("/user", userRoutes);
router.use("/pet", userRoutes);
router.use("/petfood", userRoutes);

module.exports = router;
