const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const studioOwners = require("./routes/studioOwners");
const studios = require("./routes/studioRoutes");
const keys = require("./config/keys");
const path = require("path");
require("./models/User.js");
require("./models/Studio.js");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain)

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(express.static(path.join(__dirname + "/client/build")));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

authRoutes(app);
studioOwners(app);
studios(app);

app.get("*", (req, res) => {
  
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
