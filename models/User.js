const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//Destructured Versioon is live
const { Schema } = mongoose;

userSchema = new Schema({
  googleID: String,
  facebookID: String,
  email: String,
  name: String,
  social: Array,
  address: String,
  state: String,
  zip: String,
  city: String
});
//Mongo two arguments mean load something in
//1 argument means take data out
mongoose.model("users", userSchema);
