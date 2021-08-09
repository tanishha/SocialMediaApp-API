const express = require("express"),
  app = express();
const morgan = require("morgan");

// Db
require("./db");

// Call routing level middleware
const apiRoute = require("./routes/api.routes.ts");

// Load third-party middleware
app.use(morgan("dev"));

// Inbuilt middleware for parsing incoming data
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); // (for json)

// Load routing level middleware
app.use('/api', apiRoute)

app.use(function (req, res, next) {
  //for undefined request
  next({
    msg: "NOT FOUND 404",
    status: 404,
  });
});
//error handling middleware
app.use(function (err, req, res, next) {
  console.log("Error is >>", err);
  res.status(err.status || 400).json({
    msg: err.msg || err,
    status: err.status || 400,
  });
});

app.listen(3000, (err, done) => {
  if (err) {
    console.log("Server listening failed");
  } else {
    console.log("Server listening at port 3000");
  }
});
