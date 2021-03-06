const mongoose = require("mongoose");
const Schema = mongoose.Schema;

PetFoodSchema = new Schema({
  brand: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true, index: { unique: true } },
  petType: { type: String, required: true },
  caloriesPerPackage: { type: Number, required: true },
  ozPerPackage: { type: Number, required: true },
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
