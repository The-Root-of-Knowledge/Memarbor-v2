const express = require("express");
const passport = require('passport');
const authController = require("../controllers/authController.js");
// const googleOAuthController = require('../controllers/googleOAuthController.js');

const db = require("../cardModel.js");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const router = express.Router();

//route to handle signup
router.post(
  "/signup",
  authController.createUser,
  // authController.setSSIDCookie,
  (req, res) => res.status(200).send("Signup successful")
);

//route to handle login
router.post(
  "/login",
  // googleOAuthController.googleLogin,
  //passport.authenticate('local', {failureFlash: 'SIKE. no login for u'}),
  authController.verifyUser,
  // authController.setSSIDCookie,
  (req, res) => res.status(200).send("Login successful")
);

//oauth test

// passport.use(new GoogleStrategy({
//   clientID: '978976267065-hqa1pn93imn2jjn0q2ub7rkchqk19upi.apps.googleusercontent.com',
//   clientSecret: 'gbXw3PqcBTs96mevPzIIw7DE',
//   callbackURL: 'http://localhost:3000/auth/google/callback'
// },
// function(accessToken, refreshToken, profile, done) {
//   console.log('access token',accessToken);
//   console.log('refresh token',refreshToken);
//   console.log('profile', profile)
//   //return done(null, 'coderbrandonbowers@gmail.com')
//   const profileid = [profile.id];
//   const queryString = "SELECT * FROM googleUsers WHERE googleid= $1;"
//   db.query(queryString, profileid)
//     .then(data => {
//       return done(null, data);
//     })
//     .catch(err => {
//       return done(err);
//     })
// }
// ));
passport.serializeUser(function(user,done) {
  done(null,user);
});
passport.deserializeUser(function(user, done) {
  done(null,user);
});


router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/google/callback', 
  passport.authenticate('google', {failureRedirect: '/login'}),
  function (req, res){
    res.redirect('http://localhost:3000');
  }
);

passport.use(new GoogleStrategy({
  clientID: '978976267065-hqa1pn93imn2jjn0q2ub7rkchqk19upi.apps.googleusercontent.com',
  clientSecret: 'gbXw3PqcBTs96mevPzIIw7DE',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
function(accessToken, refreshToken, profile, done) {
  console.log('access token',accessToken);
  console.log('refresh token',refreshToken);
  console.log('profile', profile)
  //return done(null, 'coderbrandonbowers@gmail.com')
  const profileid = [profile.id];
  const queryString = "SELECT * FROM googleUsers WHERE googleid= $1;"
  db.query(queryString, profileid, function(err,data) {
    console.log('data', data)
    if(err) {
      return done(err);
    }
    if(!data.rows.length) return done(null, false, {message: 'Incorrect Password'})
    return done(null,data.rows[0])
  })

}
));

module.exports = router;
