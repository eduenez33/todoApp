var express = require("express");
var app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {});

app.listen(port, function() {
  console.log("App listening on port 3000");
});
