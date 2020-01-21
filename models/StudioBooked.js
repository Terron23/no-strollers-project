const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//Destructured Versioon is live
const { Schema } = mongoose;

studioBookedSchema = new Schema({
  _user: String,
  studioOwner: String,
  studioName: String,
  studioId: String,
  dateBooked: Date,
  payment: Number,
  cardInfo: String
});
//Mongo two arguments mean load something in
//1 argument means take data out
mongoose.model("studioBooked", studioBookedSchema);
