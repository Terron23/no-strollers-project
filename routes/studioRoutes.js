var dotenv = require("dotenv");
dotenv.load();
const _ = require("lodash");
const db = require("../models/queries");
const request = require('superagent');
const keys = require('../config/keys');
const email_subscribe = keys.EMAIL_SUBSCRIBE;
 

module.exports = app => {


  app.get("/api/v2/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/v2/current_user", (req, res) => {
    res.send(req.user);
  });



  app.get("/api/v2/studio-listing", db.getStudios);
  app.get("/api/v2/studio-type", db.getStudioType);
  app.get("/api/v2/single-studio-listing/:id", db.getSingleStudios);
  app.get("/api/v2/feature-studios", db.getFeatureStudios);
  app.get("/api/v2/studios-booked", db.getStudiosBooked);
  app.get("/api/v2/reviews/:id", db.getReviews);
  app.post("/api/v2/post-listing", db.postListing);
  app.post("/api/v2/payment", db.postPayment);
  app.post("/api/v2/reviews", db.postReview);

  app.post("/api/v2/subscribe", (req, res) => {
    request
    .post('https://' + "us4" + '.api.mailchimp.com/3.0/lists/6b41331243/members')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + email_subscribe).toString('base64'))
    .send({
      'email_address': req.body.email_address,
      'status': 'subscribed',
      'merge_fields': {
        'FNAME': "N/A",
        'LNAME': "N/A"
      }
    })
        .end(function(err, response) {
          if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
            res.send('Signed Up!');
          } else {
            console.log(err)
            res.send('Sign Up Failed :(');
          }
      });
  });

  app.put("/api/v2/post-images", db.putImages);
  app.put("/api/v2/post-details", db.putStudioDetails);
  app.put("/api/v2/put-studio-info", db.putStudioInfo);
  app.put("/api/v2/update-user", db.updateUser);
  app.put("/api/v2/update-user-image", db.updateUserImage);
};
