const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { url: "./views/home.ejs" });
});

module.exports = router;
