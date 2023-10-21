const express = require('express');
const http = require('http');
const { default: Terra } = require("terra-api");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
require('dotenv').config();



const app = express();
const server = http.createServer(app);
// Configure session
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth 2.0 configuration
passport.use(new GoogleStrategy({
  clientID: '24042612342-s8a493jm621jat4slver004o6apvpjgr.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  console.log('Passport Google OAuth callback executed');
  return done(null, profile);
}));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google Authentication routes
app.get('/', async function (req, res) {
  const resp = await terra.generateWidgetSession({
    referenceID : "HelloHarvard--", 
    language: "en",
    authSuccessRedirectUrl: "http://localhost:8000/auth/google",
    authFailureRedirectUrl: "http://localhost:8000/auth/google" });
  res.redirect(200, resp.url);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://developers.google.com/oauthplayground'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

app.get('/profile', (req, res) => {
  res.send('Welcome, ' + req.user.displayName);
});

// Terra API configuration
const terra = new Terra("devhealth-testing-YQLSEBodYU", "SRMnRszM3tcn4_8t-Z7FLPRJUvA8w0Bg", "some secret");

app.get('/terra', async (req, res) => {
  const resp = await terra.generateWidgetSession({
    referenceID: "HelloHarvard--",
    language: "en",
    authSuccessRedirectUrl: "https://widget.tryterra.co/session/65d47928-1d90-450c-87ae-423436703e36",
    authFailureRedirectUrl: "http://localhost:8000/auth/google"
  });
});


// Define additional Terra API routes here


server.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});