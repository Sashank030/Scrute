// server/config/passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/redirect"
}, (accessToken, refreshToken, profile, done) => {
  // Check if user already exists in our db
  User.findOne({ googleId: profile.id }).then((currentUser) => {
    if (currentUser) {
      // already have the user
      done(null, currentUser);
    } else {
      // if not, create user in our db
      new User({
        googleId: profile.id,
        username: profile.displayName,
        thumbnail: profile._json.picture
      }).save().then((newUser) => {
        done(null, newUser);
      });
    }
  });
}));

// LinkedIn Strategy
passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: "/auth/linkedin/redirect",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, (accessToken, refreshToken, profile, done) => {
  // LinkedIn logic
  User.findOne({ linkedinId: profile.id }).then((currentUser) => {
    if (currentUser) {
      done(null, currentUser);
    } else {
      new User({
        linkedinId: profile.id,
        username: profile.displayName
      }).save().then((newUser) => {
        done(null, newUser);
      });
    }
  });
}));
