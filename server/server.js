require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const router = require("./routers/auth.js");
const cors = require("cors");
var path = require("path");
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var session = require("express-session");

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
app.use(
  cookieSession({
    name: "session",
    keys: ["bangngo"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

// parse application/json
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./passport")(passport);
app.use("/auth", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
