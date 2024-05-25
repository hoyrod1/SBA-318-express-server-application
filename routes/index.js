const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to the Fitness SBA Express Server Application",
    url: "./views/home.ejs",
  });
});

module.exports = router;
