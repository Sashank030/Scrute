// server/routes/auth.js
import express from 'express';
import passport from 'passport';

const router = express.Router();

// auth login
router.get("/login", (req, res) => {
  res.send("login");
});

// auth logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// auth with google
router.get("/google", passport.authenticate("google", {
  scope: ["profile"]
}));

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile/");
});

// auth with linkedin
router.get("/linkedin", passport.authenticate("linkedin"));

// callback route for linkedin to redirect to
router.get("/linkedin/redirect", passport.authenticate("linkedin"), (req, res) => {
  res.redirect("/profile/");
});

export default router;
