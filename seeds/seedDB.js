const mongoose = require("mongoose"),
  db = require("../models");

const connStr = "mongodb://localhost/catlady";
mongoose.connect(connStr, (err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to MongoDB");
});

// create a user a new user
const testUser = new db.User({
  username: "BrianLFarmer",
  password: "SuperPassWord",
  pets: []

});

db.User.remove({}).then(
  testUser
  .save()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
    })
    );

    //Create new Pet
    const testPet = new db.Pet({
      petName: "Marigold",
      petType: "Dog",
      weight: 20
    });
    
db.Pet.remove({}).then(
  testPet
    .save()
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);
    
// Create new food
    const testPetFood = new db.PetFood({
      name:  "Merrick Grain Free 96% Real Chicken",
      caloriesPerPackage : 441,
      ozPerPackage:  12.7,
      ingredientsRating: 4, 
      nutritionRating: 4
    });
    
db.PetFood.remove({}).then(
  testPetFood
    .save()
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);
