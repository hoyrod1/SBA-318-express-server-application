const express = require("express");
const router = express.Router();

router.route("/home").get((req, res) => {
  res.render("home", {
    title: "Welcome to the home page",
  });
});

module.exports = router;
