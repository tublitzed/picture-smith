var express = require('express');
var bodyParser = require('body-parser'); // for reading JSON in requests.

var path = require('path');
var app = express();
var SERVER_PORT = 4000;
var ROOT_PATH = __dirname + '/../';
var VIEWS_PATH = ROOT_PATH + '/app/views';

var Response = require('./response/');

app.use(bodyParser.json()); // to support JSON-encoded bodies

app.set('views', '../views');
app.set('views engine', 'html');

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: VIEWS_PATH
  });
})

// expose a single "api" endpoint to the front-end.
app.post('/api/images', function(req, res) {
  Response.getImages(res, [], req.body.words, 0);
})

app.use('/public', express.static(ROOT_PATH + '/public'));

var server = app.listen(SERVER_PORT, function() {
  console.log('server running at http://localhost:' + SERVER_PORT)
});
