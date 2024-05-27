const { error } = require("console");
const { response } = require("express");
const bodyParser = require("body-parser");
const express = require("express");
const { request } = require("http");
const indexRouter = require("./routes/index.js");
// const homeRouter = require("./routes/home.js");
const app = express();
const port = 8080;
//===========================================================================================//

//===========================================================================================//
app.set("views", "views");
//-------------------------------------------------------------------------------------------//
app.set("view engine", "ejs");
//===========================================================================================//

//===========================================================================================//
app.use(express.json());
//-------------------------------------------------------------------------------------------//
/**
 * Middleware
 */
const logReq = (request, response, next) => {
  console.log(
    `${request.method} was made to ${request.url} from the hostname: ${request.hostname}!!!`
  );
  console.log("Request received!!!");
  next();
};
app.use(logReq);
//===========================================================================================//

//===========================================================================================//
app.use(express.urlencoded({ extended: true }));
// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
//-------------------------------------------------------------------------------------------//
app.use(express.static("public"));
//-------------------------------------------------------------------------------------------//
app.use("/", indexRouter);
//-------------------------------------------------------------------------------------------//
// app.use("/home", indexRouter);
// app.use("/home", homeRouter);
//===========================================================================================//

//===========================================================================================//
//-------------------------------------------------------------------------------------------//
// 404 Middleware
app.use((request, response, next) => {
  response.render("404", {
    title: "404 Opps page not found!!!",
  });
  next(error(404, `Resource not found`));
});
// Error-handling middleware.
app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({ errMessage: error.message });
});
//-------------------------------------------------------------------------------------------//
app.listen(port, () => {
  console.log(`This server is listening on port: ${port}`);
});
//-------------------------------------------------------------------------------------------//
//===========================================================================================//
