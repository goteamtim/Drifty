var express = require('express');
var Flickr = require('flickrapi'),
flickrOptions = {
      api_key: "",
      secret: ""
    };
 
Flickr.authenticate(flickrOptions, function(error, flickr) {
  // we can now use "flickr" as our API object
});
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

