var dotenv = require("dotenv");
dotenv.load();
const _ = require("lodash");
//const Path = require('path-parser');
const multer = require("multer");
const path = require("path");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const passport = require("passport");
const keys = require("../config/keys");

require("../models/Studio.js");
require("../models/StudioBooked.js");
require("../models/User.js");
require("../models/Availibility.js");
require("../models/StudioTypes.js");
require("../services/passport.js");

const Studio = mongoose.model("studio");
const Availibility = mongoose.model("availibility");
const Booked = mongoose.model("studioBooked");
const StudioType = mongoose.model("studiotypes");

mongoose.connect(keys.mongoURI);

module.exports = app => {
  app.post("/api/post-listing-time", async (req, res) => {
    const {
      studioname,
      studioid,
      schedule
    } = req.body;
    let studioName = studioname;
    try {
      const studioUpdate = await Studio.update(
        { studioName: studioName, _id: studioid },
        { availibility: schedule }
      );

      res.send(`Updated ${studioName}`);
    } catch (err) {
      throw err;
    }
  });



  app.post("/api/post-images", async (req, res) => {
    const {
      studioname,
      studioid,
      studioImageSecondary,
    } = req.body;
    let studioName = studioname;
    try {
      const studioUpdate = await Studio.update(
        { studioName: studioName, _id: studioid },
        { $push: {studioImageSecondary: studioImageSecondary} }

      );
      res.send(`Updated ${studioName} with ${studioImageSecondary}`);
    } catch (err) {
      throw err;
    }
  });


  app.put("/api/post-details", async (req, res) => {
    const {
      capacity,
      equipment,
      services,
      description,
      studioname,
      studioid,
      include,
      dates,
    } = req.body;
    console.log(req.body)
    let studioName = studioname;
    try {
      const studioUpdate = await Studio.update(
        { studioName: studioName, _id: studioid },
        {capacity:capacity,
          equipment: equipment,
          services:services,
          includes: include,
          description:description,
        dates:dates},
          {upsert:true}

      );
      res.send(`Updated ${studioName} with ${description}`);
    } catch (err) {
    }
  });

  app.post("/api/post-listing", async (req, res) => {
    const {
      name,
      phone,
      venue,
      address1,
      address2,
      postalCode,
      region,
      city,
      email,
      isPremium,
      price,
      rules,
      guest,
      studioName,
      studioImage,
      studioType,
      hoursOfOperation,
      timeOut,
      timeIn,
      studioImageSecondary,
      studioid,
    } = req.body;

    const existingUser = await Studio.findOne({
      _user: req.user.id,
      studioName,
      address1,
      city,
      postalCode
    });
    console.log(req.body, existingUser);

    if (existingUser) {
      Studio.update(
        { _user: req.user.id, _id: studioid },
        {
          name,
          phone,
          venue,
          address1,
          address2,
          postalCode,
          region,
          city,
          email,
          isListed: true,
          studioName,
          guest,
          price,
          rules,
          hoursOfOperation,
          studioType,
          studioImage,
          timeOut,
          timeIn,
          dates,
        },
        { $push: {studioImageSecondary: 95 } },
        { upsert: true },
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("update succeded");
          }
        }
      );
    } else {
      let studio = new Studio({
        _user: req.user.id,
        name,
        phone,
        venue,
        address1,
        address2,
        postalCode,
        region,
        city,
        email,
        isListed: true,
        studioName,
        guest,
        price,
        rules,
        hoursOfOperation,
        studioType,
        studioImage,
        timeOut,
        timeIn,
        dates,
        studioImageSecondary,
      }).save((err, inserted) => {
        console.log(inserted._id);
        res.send(inserted._id);
      });
    }
  });

  app.get("/api/studio-listing", async (req, res) => {
    const studio = await Studio.find({}, function(err, studio) {
      res.send(studio);
    });
  });

  app.get("/api/feature/studio-listing", async (req, res) => {
    const studio = await Studio.find({}, function(err, studio) {
      res.send(studio);
    })
      .sort({ price: -1 })
      .limit(3);
  });

  app.get("/api/studio-type", async (req, res) => {
    const studiotype = await StudioType.find({}, function(err, studiotype) {
      res.send(studiotype);
    });
  });

  app.get("/api/availibility", async (req, res) => {
    const availibility = await Availibility.find({}, function(
      err,
      availibility
    ) {
      res.send(availibility);
    });
  });

  app.get("/api/studioBooked", async (req, res) => {
    const booked = await Booked.find({}, function(err, booked) {
      res.send(booked);
    });
  });
};
