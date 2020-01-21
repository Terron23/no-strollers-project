//figure out which set of credentials to return
if (process.env.NODE_ENV === "production") {
  //We are in production
  //Return the Production Keys
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
