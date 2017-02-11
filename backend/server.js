
var express = require('express');
//var Dropzone = require("dropzone");

var app = express();

//app.use(express.static('../frontend'));

app.get('/', function (req, res) {
  res.sendfile('../frontend/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});