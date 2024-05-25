const { response } = require("express");
const express = require("express");
const { request } = require("http");
const indexRouter = require("./routes/index.js");
const app = express();
const port = 8080;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/", indexRouter);

// app.use((error, request, response, next) => {
//   response.status(500).send(`There was a server error`);
// });

app.listen(port, () => {
  console.log(`This server is listening on port: ${port}`);
});
