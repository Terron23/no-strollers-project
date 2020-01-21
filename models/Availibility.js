const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//Destructured Versioon is live
const { Schema } = mongoose;

availibilitySchema = new Schema({
  _user: String,
  day: String,
  starttime: String,
  endtime: String,
  datetime: Date
});
//Mongo two arguments mean load something in
//1 argument means take data out
mongoose.model("availibility", availibilitySchema);
