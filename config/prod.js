//Production Keys

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  STRIPE_API_KEY: process.env.STRIPE_API_KEY,
  STRIPE_API_SECRET: process.env.STRIPE_API_SECRET,
  postgresHost: process.env.postgresHost,
  postgresUser:process.env.postgresUser,
  postgresDB: process.env.postgresDB,
  postgresPassword:process.env.postgresPassword,
  postgresPort: process.env.postgresPort,
  postgresConnectionString: process.env.postgresConnectionString,
  EMAIL_SUBSCRIBE: process.env.EMAIL_SUBSCRIBE,
  ssl: true,
};
