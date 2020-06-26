const mongoose = require("mongoose"),
  Schema = mongoose.Schema,

 petSchema = new Schema({
    petName: {type: String, required : true },
    petType: {type: String, required: true },
    weight: {type: Number , required: true}
  });

  
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet  ;