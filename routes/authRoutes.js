const mongoose = require("mongoose");
const passport = require("passport");
const stripe = require("stripe")("sk_test_V6wlaNvsxc7i7lpa0BfseByb");
const keys = require("../config/keys");
const where = require("node-where");
require("../models/User.js");
require("../models/StudioBooked.js");

const StudioBooked = mongoose.model("studioBooked");
const Users = mongoose.model("users");
// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:

module.exports = app => {

   function LoginRoutes (param){
    return param ==='/sign-up' || param === '/log-in' ? '/' : param
  }

  app.get(`/auth/google`, (req, res, next) => {
    const authenticator = passport.authenticate("google", {scope: ["profile", "email"]})
    req.app.locals.urlGoogle = LoginRoutes(req.query.path);;
    console.log("route" , req.query)
    authenticator(req, res, next)
})

 app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
   
    (req, res) => {
      console.log(req.app.locals.urlGoogle)
      res.redirect(req.app.locals.urlGoogle);
    }
  );

  app.get("/auth/facebook", (req, res, next) => {
    const authenticator = passport.authenticate("facebook")
    req.app.locals.urlFB = LoginRoutes(req.query.path);
    authenticator(req, res, next)
  });

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect(req.app.locals.urlFB);
    }
  );

  app.post(`/auth/local`,  passport.authenticate("local"), (req, res)=>{
    console.log(req.query.path)
    res.json({data: LoginRoutes(req.query.path)})
    
  })
  
  app.post(`/auth/signup/local`,  passport.authenticate("local"), (req, res)=>{
    res.json({data: LoginRoutes(req.query.path)})
  })
  

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  
};
