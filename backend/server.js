
var express = require('express');
//var Dropzone = require("dropzone");
var path = require('path');

var app = express();

app.use("/",  express.static(path.resolve("../frontend/")));

app.get('/', function (req, res) {
  res.sendFile(path.resolve("../frontend/static/index.html"));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
