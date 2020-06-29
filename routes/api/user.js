const router = require("express").Router();
const UserController = require("../../controller/userController");
const db = require("../../models");

// Matches with "/api/user/"
router
  .route("/")
  .get((req, res) => UserController.findAll(req, res, db.User))
  .post((req, res) => UserController.create(req, res, db.User));

router
  .route("/pets")
  .get((req, res) => res.json([
    {
      name: 'Fluffy',
      imgsrc: 'cat.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Cat',
      description: 'adopted and loved by all'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Fido',
      imgsrc: 'dog.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Dog',
      description: 'found in the street'
    },
    {
      name: 'Garf',
      imgsrc: 'cat.png',
      currentWeight: 12,
      idealWeight: 8,
      type: 'Cat',
      description: 'totally annoying'
    }]
  ));
// .post((req, res) => UserController.create(req, res, db.User));

module.exports = router;
