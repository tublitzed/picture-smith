require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser'); // for reading JSON in requests.
var path = require('path');
var app = express();

var SERVER_PORT = 4000;
var ROOT_PATH = __dirname + '/../';
var ResponseHelpers = require('./response/');

app.use(bodyParser.json());
app.use('/public', express.static(ROOT_PATH + '/public'));

app.set('views', '../views');
app.set('views engine', 'html');

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: ROOT_PATH + '/app/views'
  });
})

app.post('/api/images', function(req, res) {
  ResponseHelpers.getImages(res, [], req.body.words, 0);
})

app.listen(SERVER_PORT, function() {
  console.log('server running at http://localhost:' + SERVER_PORT)
});
