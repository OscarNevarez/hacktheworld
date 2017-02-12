var express = require('express');
var path = require('path');
var fileUpload = require('express-fileupload');

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
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
