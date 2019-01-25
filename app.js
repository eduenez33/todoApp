var express = require("express");
var app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.post("/", function(req, res) {
  res.send("Got a POST request");
});

app.listen(port, function() {
  console.log("App listening on port 3000");
});
