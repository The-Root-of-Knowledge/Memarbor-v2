const db = require("../cardModel.js");

const authController = {};

//middleware to add a user to the user table
// authController.createUser = (req, res, next) => {
//   const newUser = [req.body.id, req.body.username, req.body.password];
//   console.log("req.body", req.body);
//   const queryString = `INSERT INTO users (id, username, password) VALUES ($1, $2, $3);`;

//   db.query(queryString, newUser)
//     .then(() => {
//       return next();
//     })
//     .catch((err) => {
//       console.log("error in create user middleware", err);
//       return next(err);
//     });
// };

//middleware to encrypt passwords

//middleware to verify user (ie check if the password in the table matches the username we looked up)
authController.verifyUser = (req, res, next) => {
  const user = [req.body.username];
  const queryString = `SELECT username, password FROM users WHERE username = $1;`;

  db.query(queryString, user)
    .then((data) => {
      if (data[0].password === req.body.password) {
        res.locals.verify = true;
      } else {
        res.locals.verify = true;
      }
      return next();
    })
    .catch((err) => {
      console.log("error in verify user middleware", err);
      return next(err);
    });
};

authController.setCookie = (req, res, next) => {
  res.setCookie();
};

// authController.setSSIDCookie = (req, res, next) => {};

module.exports = authController;
