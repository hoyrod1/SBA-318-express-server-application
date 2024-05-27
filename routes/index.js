const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
//===========================================================================================//
// Array of object with the available trainer information
const trainers = require("../data/trainers");
// Array of objects containing the training packages
const trainingPackages = require("../data/training-package");
// Array of objects containing the members
const members = require("../data/members");
//===========================================================================================//

//===========================================================================================//
// index landing page
router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to the Fitness SBA Express Server Application",
    url: "./views/home.ejs",
  });
});
//===========================================================================================//

//===========================================================================================//
// home page displays available trainers and traning packages
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
//===========================================================================================//

//===========================================================================================//
// register page registers new clients
router.get("/register", (req, res) => {
  res.render("register", {
    title: "Welcome To The Registration Page",
  });
});
//===========================================================================================//

//===========================================================================================//
// Register a new member
router.post("/members", (req, res) => {
  // const addedMember = members.push(req.body);
  console.log(req.body);
});
//===========================================================================================//

//===========================================================================================//
// Register a new member
router.get("/members", (req, res) => {
  // const addedMember = members.push(req.body);
  res.render("members", {
    title: "Welcome To The Members Page",
    members: members,
  });
});
//===========================================================================================//

//===========================================================================================//
module.exports = router;
