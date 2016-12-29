var express = require('express')
var path = require('path')
var app = express()
var SERVER_PORT = 4000;
var ROOT_PATH = __dirname + '/../';
var VIEWS_PATH = ROOT_PATH + '/app/views';

app.set('views', '../views');
app.set('views engine', 'html');

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: VIEWS_PATH });
})

app.get('/yo', function(req, res) {
  res.send('yo!')
})

app.use('/public', express.static(ROOT_PATH + '/public'));

var server = app.listen(SERVER_PORT, function(){
  console.log('server running at http://localhost:' + SERVER_PORT)
})
