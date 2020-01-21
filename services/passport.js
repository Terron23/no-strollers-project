const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const googleClientID = keys.googleClientID;
const googleClientSecret = keys.googleClientSecret;
const FACEBOOK_APP_ID = keys.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = keys.FACEBOOK_APP_SECRET;

const queries = require("../models/queries");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  queries.Deserialize(id, done);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },

    async (accessToken, refreshToken, profile, done) => {
      await queries.SocialOAUth(profile, done);
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      let signup;
      let email;
       try {
        email = req.body.email;
        signup = req.body.signup
      } catch (err) {
        email = username;
        signup = false
      }
      await queries.LocalOAuth(email, signup, username, password, done);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      queries.SocialOAUth(profile, done);
    }
  )
);
