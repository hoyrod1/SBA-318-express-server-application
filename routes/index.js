const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const trainers = require("../data/trainers");
const trainingPackages = require("../data/training-package");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to the Fitness SBA Express Server Application",
    url: "./views/home.ejs",
  });
});

router.get("/home", (req, res) => {
  // const links = [
  //   {
  //     href: "users/:id",
  //     rel: ":id",
  //     type: "GET",
  //   },
  // ];
  res.render("home", {
    title: "Welcome to the home page",
    trainers: trainers,
    trainingPackages: trainingPackages,
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Welcome To The Registration Page",
  });
});

module.exports = router;
