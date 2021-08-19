const db = require("../cardModel.js");

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const googleOAuthController ={};

googleOAuthController.googleLogin = (req,res,next) => {
  passport.use(new GoogleStrategy({
    clientID: '978976267065-hqa1pn93imn2jjn0q2ub7rkchqk19upi.apps.googleusercontent.com',
    clientSecret: 'gbXw3PqcBTs96mevPzIIw7DE',
    callbackURL: 'http://localhost:3000/auth/callback'
  },
  function(accessToken, refreshToken, profile, done) {
		console.log('access token',accessToken);
		console.log('refresh token',refreshToken);
		console.log('profile', profile)
	}
	))
	return next();
}
module.exports = googleOAuthController;

