const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//Destructured Versioon is live
const { Schema } = mongoose;

studioTypeSchema = new Schema({
  studioType: String
});

mongoose.model("studiotypes", studioTypeSchema);
