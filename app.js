var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set("view engine", "ejs");

// Index Route
app.get("/", function(req, res) {
  res.render("index");
});

// Post Route
app.post("/", function(req, res) {
  var newTodo = req.body.newTodo;

  res.render("index");
});

app.listen(port, function() {
  console.log("App listening on port 3000");
});
