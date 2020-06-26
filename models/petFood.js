const mongoose = require("mongoose");
const Schema = mongoose.Schema;

PetFoodSchema = new Schema({
  name: { type: String, required: true },
  caloriesPerPackage: { type: Number, required: true },
  ozPerPackage: { type: String, required: true },
  ingredientsRating: { type: Number },
  nutritionRating: { type: Number },
});

const PetFood = mongoose.model("PetFood", PetFoodSchema);

module.exports = PetFood;
