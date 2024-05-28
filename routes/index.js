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
  res.render("home", {
    title: "Welcome To The Home Page",
    trainers: trainers,
    trainingPackages: trainingPackages,
  });
});
//===========================================================================================//

//===========================================================================================//
// Get the information for a single trainer
router.get("/trainer/:id", (req, res) => {
  const trainerInfo = trainers.find((trainer) => trainer.id == req.params.id);
  console.log(req.params.id);
  res.render("trainer", {
    title: "Welcome To The Trainers Page",
    trainerInfo: trainerInfo,
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
router.get("/members", (req, res) => {
  // const links = [
  //   {
  //     href: "users/:id",
  //     rel: ":id",
  //     type: "GET",
  //   },
  // ];
  res.render("members", {
    title: "Welcome To The Members Page",
    members: members,
  });
});
//-------------------------------------------------------------------------------------------//
// Delete a single member
router.delete("/members/:id", (req, res) => {
  // const memberInfo = members.find((member, i) => {
  //   if (member.id == req.params.id) {
  //     members.splice(i, 1);
  //     return true;
  //   }
  // });
  res.render("members", {
    title: "Welcome To The Members New Page",
    members: members,
  });

  // if (memberInfo) {
  //   res.render("members", {
  //     title: "Welcome To The Members New Page",
  //     members: members,
  //   });
  // } else {
  //   next();
  // }
});
//===========================================================================================//

//===========================================================================================//
// Register a new member
router.post("/members", (req, res, next) => {
  // const addedMember = members.push(req.body);
  if (req.body.name && req.body.username && req.body.email) {
    const newMemeber = {
      id: members[members.length - 1].id + 1,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
    };
    members.push(newMemeber);
    res.render("members", {
      title: "Welcome To The Members Page",
      members: members,
    });
  } else next(error(400, "Insufficient Data"));
  console.log(req.body);
});
//===========================================================================================//

//===========================================================================================//

//===========================================================================================//
// Register a new member
// router.patch("/trainer/:id", (req, res, next) => {
//   // const addedMember = members.push(req.body);
//   if (req.body.name && req.body.username && req.body.email) {
//     const newMemeber = {
//       id: members[members.length - 1].id + 1,
//       name: req.body.name,
//       username: req.body.username,
//       email: req.body.email,
//     };
//     members.push(newMemeber);
//     res.render("members", {
//       title: "Welcome To The Members Page",
//       members: members,
//     });
//   } else next(error(400, "Insufficient Data"));
//   console.log(req.body);
// });
//===========================================================================================//

//===========================================================================================//
module.exports = router;
