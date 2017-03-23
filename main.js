var express = require('express');
var Flickr = require('flickrapi'),
    flickrOptions = {
        api_key: "",
      secret: ""
    };
var app = express();

Flickr.authenticate(flickrOptions, function (error, flickr) {
    // we can now use "flickr" as our API object
    //Handle error here
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    app.get('/driftly', function (req, res) {
        flickr.photos.search({
            text: "red+panda"
        }, function (err, result) {
            if (err) { throw new Error(err); }
            // do something with result
            res.send(result);
        });

    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });


});




