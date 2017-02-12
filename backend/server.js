var express = require('express');
var fs = require('fs');
var path = require('path');
var fileUpload = require('express-fileupload');
var detectText = require('./detect.js').detectText;

var app = express();
app.use(fileUpload());
app.use("/",  express.static(path.resolve("../frontend/")));

app.get('/', function (req, res) {
  res.sendFile(path.resolve("../frontend/static/index.html"));
});

app.post('/upload', function(req, res) {
    console.log('/upload called');
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
    console.log(req.files);
    let file = req.files.file;
    let counter = 0;
    let filePathToPic = "./sample" + req.files.file.name.substr(-4);
    file.mv(filePathToPic, function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded!');
        }
    });
    detectText(filePathToPic);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
