const mongoose = require("mongoose");
const Schema = mongoose.Schema;

PetFoodSchema = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  petType: { type: String, required: true },
  caloriesPerPackage: { type: Number, required: true },
  ozPerPackage: { type: Number, required: true },
  ingredientsRating: { type: Number },
  nutritionRating: { type: Number },
  ingredients: { type: String },
  protein: { type: Number },
  fat: { type: Number },
  carbs: { type: Number },
  ash: { type: Number },
  fiber: { type: Number },
  moisture: { type: Number },
});

const PetFood = mongoose.model("PetFood", PetFoodSchema);

module.exports = PetFood;
