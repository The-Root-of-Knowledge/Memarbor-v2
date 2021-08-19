const db = require("../cardModel.js");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const authController = {};

//middleware to add a user to the user table
authController.createUser = async (req, res, next) => {
  const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds);

  const newUser = [req.body.username, encryptedPassword];
  const queryString = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;`;

  db.query(queryString, newUser)
    .then((data) => {
      res.locals.userId = data.rows[0]._id;
      return next();
    })
    .catch((err) => {
      console.log("error in create user middleware", err);
      return next(err);
    });
};

//middleware to encrypt passwords

//middleware to verify user (ie check if the password in the table matches the username we looked up)
authController.verifyUser = (req, res, next) => {
  const user = [req.body.username];
  const queryString = `SELECT password, _id FROM users WHERE username = $1;`;
  const attemptedPassword = req.body.password;

  db.query(queryString, user)
    .then(async (data) => {
      res.locals.verificationStatus = await bcrypt.compare(
        attemptedPassword,
        data.rows[0].password
      );
      res.locals.userId = data.rows[0]._id;
    })
    .then(() => {
      if (res.locals.verificationStatus === true) return next();
      else res.status(401).send("Password is not a match");
    })
    .catch((err) => {
      console.log("error in verify user middleware", err);
      return next(err);
    });
};

// authController.setCookie = (req, res, next) => {
//   res.setCookie();
// };

// authController.setSSIDCookie = (req, res, next) => {};

module.exports = authController;
