const mongoose = require("mongoose");
const Schema = mongoose.Schema;

petSchema = new Schema({
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  currentWeight: { type: Number, required: true },
  idealWeight: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  petFoodId: { type: Schema.Types.ObjectId, ref: "PetFood" },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
