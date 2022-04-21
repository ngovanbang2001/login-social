var FacebookStrategy = require("passport-facebook").Strategy;
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var GithubStrategy = require("passport-github2").Strategy;
var AccountModel = require("./models/account");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcryptjs");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function (username, password, done) {
      AccountModel.findOne({ username: username, password: password })
        .then((data) => {
          if (!data) done(null, false);
          done(null, data);
        })
        .catch((err) => {
          done(err);
        });
    })
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "998179829507-4uvl69u0csnpk4v1u8rt468396h3gj7m.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:5000/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.use(
    new GithubStrategy(
      {
        clientID: "000112ab9cb08d75d8d0",
        clientSecret: "3c07208e7c30c8d0e3429f85a427ef1e83224581",
        callbackURL: "http://localhost:5000/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: " 426671952553291",
        clientSecret: "8004087d4f0d61ced31e28eb8497c22c",
        callbackURL: "http://localhost:5000/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
