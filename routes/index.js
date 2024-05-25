const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "SBA Express Server Application",
    url: "./views/home.ejs",
  });
});

module.exports = router;
