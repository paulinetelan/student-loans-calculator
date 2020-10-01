//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loans = [];

// set ejs as view engine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// tells app to use public folder for static files (e.g. images)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add", (req, res) => {
  let loan = {
    amount: req.body.amount,
    apr: req.body.apr
  };

  console.log(loan);

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
