const router = require("express").Router();
var passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
var AccountModel = require("../models/account");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    authType: "reauthenticate",
    scope: ["profile"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", {
    authType: "reauthenticate",
    scope: ["profile"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    authType: "reauthenticate",
    scope: ["profile"],
  })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user) {
    if (err) {
      return next.status(500).json("loi server");
    }
    if (!user) {
      return res.json("username password khong hop le ");
    }
    jwt.sign(user.toObject(), "123", function (err, token) {
      if (err) {
        res.status(500).json("loi server");
      }
      res.send(user);
    });
  })(req, res, next);
});
router.post("/register", (req, res) => {
  AccountModel.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const newUser = new AccountModel({
        username: req.body.username.trim(),
        password: req.body.password.trim(),
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});
router.get("/user", (req, res) => {
  console.log(req.headers["authorization"]);
  if (req.headers) {
    let token = req.headers["authorization"].split(" ")[1];
    console.log(token);
    jwt.verify(token, "123", (err, data) => {
      if (err) res.status(403).json("token khong hop le");

      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    });
  }
});
module.exports = router;
