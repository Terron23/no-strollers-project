const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//Destructured Versioon is live
const { Schema } = mongoose;

studioSchema = new Schema({
  _user: String,
  name: String,
  phone: String,
  address1: String,
  address2: String,
  postalCode: String,
  region: String,
  city: String,
  venue: String,
  email: String,
  isListed: Boolean,
  isPremium: Boolean,
  guest: Number,
  rules: String,
  studioName: String,
  price: Number,
  studioImage: String,
  hoursOfOperation: String,
  studioType: String,
  availibility: Array,
  rating: Array,
  timeIn: String,
  timeOut: String,
  dates: String,
  studioImageSecondary: Array,
  capacity: String,
  equipment: String,
  services: String,
  description:String,
  includes: String,
});
//Mongo two arguments mean load something in
//1 argument means take data out
mongoose.model("studio", studioSchema);
