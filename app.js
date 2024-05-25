const express = require("express");
const indexRouter = require("./routes/index.js");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`This server is listening on prt: ${port}`);
});
