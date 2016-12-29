var express = require('express')
var app = express()
var SERVER_PORT = 4000;

app.get('/', function(req, res) {
  res.send('Hello, world!')
})


app.get('/yo', function(req, res) {
  res.send('yo!')
})

var server = app.listen(SERVER_PORT, function(){
  console.log('server running at http://localhost:' + SERVER_PORT)
})
