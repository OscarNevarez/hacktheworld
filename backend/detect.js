'use strict';

module.exports = {
    detectText: detectText
}

function detectText (fileName) {
  // [START vision_text_detection]
  // Imports the Google Cloud client library
  var array = [];
  var b = [];
  var r = /(^$)?[0-9]+(\.[0-9][0-9])$/;///(^$)?[0-9]+.?[0-9][0-9]$/;
  var largest= 0;
  const Vision = require('@google-cloud/vision');

  // Instantiates a client
  const vision = Vision();

  // The path to the local image file, e.g. "/path/to/image.png"
  // const fileName = '/path/to/image.png';

  // Performs text detection on the local file
  vision.detectText(fileName)
    .then((results) => {
      const detections = results[0];

      console.log('Text:');
      detections.forEach((text) => array.push(text));
      array.forEach( function(y){
        if(r.test(y)){
          if(y.charAt(0) == '$'){
            b.push(Number(y.substr(1)));
          }
          else{
            b.push(Number(y));
          }
        }
      });
    console.log(b);
  for (var i=0; i<=largest;i++){
  if (b[i]>largest) {
      largest=b[i];
  }
}
console.log(largest);
    });
}
