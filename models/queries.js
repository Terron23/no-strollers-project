const passport = require("passport");
const keys = require("../config/keys");
const db = keys.postgresDB;
const host = keys.postgresHost;
const password = keys.postgresPassword;
const user = keys.postgresUser;
const uri = keys.postgresConnectionString;
const stripe = require("stripe")(keys.STRIPE_API_SECRET);
const bcrypt = require("bcrypt");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: user,
  host: host,
  database: db,
  password: password,
  port: 5432,
  connectionString: uri,
  ssl: true
});

//deserialize User
const Deserialize = (id, done) => {
  pool.query(`SELECT * FROM users WHERE _id = ${id}`, (err, results) => {
    if (err) {
    }
    done(null, results.rows[0]);
  });
};

//Auth Request
const SocialOAUth = (profile, done) => {
  let profileEmail = "";
  try {
    if (!profile.emails[0].value) {
      profileEmail = profile.emails[0].value;
    }
  } catch (err) {
    console.log(err);
  }

  const existingUser = pool.query(
    `SELECT * FROM users WHERE social_id = '${profile.id}'`,
    (err, results) => {
      if (err) {
        return done(err);
      } else if (results.rows[0]) {
        return done(null, results.rows[0]);
      } else {
        pool.query(
          `Insert into users(social_id, email, contact_name, username, password) values('${profile.id}', 
            '${profileEmail}', '${profile.displayName}', '${profileEmail}', '')`,
          (err, results) => {
            if (err) {
              return done(err, { message: "Something Went Wrong" });
            }

            pool.query(
              `SELECT * FROM users WHERE social_id = '${profile.id}'`,
              (err, results) => {
                if (err) {
                  return done(err);
                }

                done(null, results.rows[0]);
              }
            );
          }
        );
      }
    }
  );
};

function getUser(username, password, done) {
  return new Promise(resolve => {
    let valid = true;
    pool.query(
      `SELECT * FROM users WHERE username = '${username}' 
     and password='${password}'`,
      (err, results) => {
        if (err) {
          return done(err);
        } else if (results.rows[0]) {
          done(null, results.rows[0]);
        } else {
          done(null, results.rows[0]);
          valid = false;
          resolve(valid);
        }
      }
    );
  });
}

function getUserName(email, signup, username, password, done) {
  return new Promise(resolve => {
    let valid = true;

    pool.query(
      `SELECT * FROM users WHERE (username = '${username}' or email= '${email}') and password <> ''`,
      (err, results) => {
        if (err) {
          return done(err);
        } else if (results.rows[0]) {
          if (signup) {
            done(null, false);
            resolve(valid);
          } else if (results.rows[0].password === password) {
            done(null, results.rows[0]);
            resolve(valid);
          } else if (results.rows[0].password !== password) {
            done(null, false);
            resolve(valid);
          }
        } else {
          if (signup) {
            valid = false;

            resolve(valid);
          } else {
            done(null, false);
          }
        }
      }
    );
  });
}

const LocalOAuth = async (email, signup, username, password, done) => {
  const user = await getUserName(email, signup, username, password, done);

  if (!user) {
    pool.query(
      `Insert into users(social_id, email, contact_name, username, password) values($1, $2, $3, $4, $5)`,
      ["", email, "", username, password],
      async (err, results) => {
        if (err) {
          return done(err);
        } else {
          getUser(username, password, done);
        }
      }
    );
  }
};

//Insert Requests
const postListing = (req, res) => {
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
    price,
    guest,
    studioName,
    studioImage,
    studioType
  } = req.body;
  pool.query(
    "Insert into studios (user_fk, contact_name, contact_phone, studio_venue, address1, address2, postal_code, city, contact_email, studio_name, guest_allowed, studio_price, studio_type_fk, main_image, state) values($1, $2 , $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)",
    [
      req.user._id,
      name,
      phone,
      venue,
      address1,
      address2,
      postalCode,
      city,
      email,
      studioName,
      guest,
      price,
      studioType,
      studioImage,
      region
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

      pool.query(
        "Select _id from studios where user_fk = $1 and studio_venue=$2 and address1=$3 and studio_name=$4 and studio_type_fk = $5 and main_image=$6",
        [req.user._id, venue, address1, studioName, studioType, studioImage],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(200).json(results.rows);
        }
      );
    }
  );
};

const postPayment = async (req, res) => {
  const { studioid, payment, token, email } = req.body;
  console.log(token);
  let { status } = await stripe.charges.create({
    amount: payment * 100,
    currency: "usd",
    description: "",
    source: token,
    receipt_email: email
  });
  pool.query(
    "Insert into orders (user_fk, studio_fk, payment,  time_stamp) values($1, $2 , $3,  now())",
    [req.user._id, studioid, payment],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(status);
    }
  );
};

//Get Requests
const getStudioType = (request, response) => {
  pool.query("Select * from studiotypes", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getStudios = (req, res) => {
  function getParams(param, val) {
    if (val === "state" && param) {
      return `and lower(${val}) like '%${param.toLowerCase()}%'`;
    }
    return !param ? `and ${val} = ${val}` : `and ${val} = '${param}'`;
  }

  let { page, limit, studioType, date, state } = req.query;

  pool.query(
    `Select * from getStudios where _id = _id and isactive=true ${getParams(
      studioType,
      "studio_type_fk"
    )} ${getParams(
      state,
      "state"
    )} order by _id  OFFSET ${page} FETCH FIRST ${limit} ROWS ONLY`,
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};

const getSingleStudios = (req, res) => {
  pool.query(
    `Select * from getStudios where _id = ${req.params.id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getFeatureStudios = (req, res) => {
  pool.query(
    `SELECT * from getStudios where isactive=true order by review desc, rating desc limit 3`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getTopStudios = (req, res) => {
  pool.query(
    `SELECT count(*) as Total, city from studios group by city order by total desc limit 3`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getStudiosBooked = (req, res) => {
  pool.query(
    `SELECT * from datebooked where _id = $1`,
    [req.user._id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};

const getReviews = (req, res) => {
  console.log(`Select * from getReviews where studio_fk = ${req.params.id}`);
  pool.query(
    `Select * from getReviews where studio_fk = ${req.params.id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

//put requests
const putStudioDetails = (req, res) => {
  const {
    capacity,
    equipment,
    services,
    description,
    studioname,
    studioid,
    rules,
    include,
    dates
  } = req.body;

  pool.query(
    "Update Studios set description=$2, includes=$3, services=$4,  equipment=$5 , guest_allowed=$6, availibility=$7, rules=$8, isActive=True where _id=$1 ",
    [
      studioid,
      description,
      include,
      services,
      equipment,
      capacity,
      dates,
      rules
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (dates) {
      }

      res.status(200).json("Details Added Successfully");
    }
  );
};

const putStudioInfo = (req, res) => {
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
    price,
    guest,
    studioName,
    studioImage,
    studioType,
    studioid
  } = req.body;
  pool.query(
    "Update studios set contact_name =$2, contact_phone=$3, studio_venue=$4, address1=$5, address2=$6, postal_code=$7, city=$8, contact_email=$9, studio_name=$10, guest_allowed=$11, studio_price=$12, studio_type_fk=$13, main_image=$14, state=$15 where _id=$16 and user_fk=$1",
    [
      req.user._id,
      name,
      phone,
      venue,
      address1,
      address2,
      postalCode,
      city,
      email,
      studioName,
      guest,
      price,
      studioType,
      studioImage,
      region,
      studioid
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

          res.status(200).json(results.rows);
        }
      );
    
  
};

//Add Images
const putImages = (req, res) => {
  const { studioid, studioname, studioImageSecondary } = req.body;
  pool.query(
    "Update studios set studio_images = $3 where user_fk =$1 and _id=$2 ",
    [req.user._id, studioid, studioImageSecondary],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Image Inserted Successfully");
    }
  );
};

//Update User Info
//Add Error Handling
const postReview = (req, res) => {
  const { review, studioid, rating } = req.body;
  pool.query(
    "Insert into reviews(review, rating, user_fk, studio_fk) values($1, $2, $3, $4)",
    [review, rating, req.user._id, studioid],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("User Info Updated");
    }
  );
};

//Update User Info
//Add Error Handling
const updateUser = (req, res) => {
  const { username, email, social, userid } = req.body;
  pool.query(
    "Update users set username=$1, email=$2 where _id=$3",
    [username, email, req.user._id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("User Info Updated");
    }
  );
};

//delete
const putRemoveImages = (req, res) => {
  const { studioid, studioImageSecondary } = req.body;
  pool.query(
    "Update studios set studio_images = $3 where user_fk =$1 and _id=$2 ",
    [req.user._id, studioid, studioImageSecondary],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json("Image Removed Successfully");
    }
  );
};

module.exports = {
  //Auth
  SocialOAUth,
  Deserialize,
  LocalOAuth,
  //post
  postListing,
  postPayment,
  postReview,
  //get
  getStudioType,
  getStudios,
  getSingleStudios,
  getStudiosBooked,
  getFeatureStudios,
  getReviews,
  //put
  putImages,
  putStudioDetails,
  putStudioInfo,
  putRemoveImages,
  updateUser
  //delete
};
