var express = require('express');
var path = require('path');
var app = express();
var NounProject = require('the-noun-project');
var SERVER_PORT = 4000;
var ROOT_PATH = __dirname + '/../';
var VIEWS_PATH = ROOT_PATH + '/app/views';

app.set('views', '../views');
app.set('views engine', 'html');

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: VIEWS_PATH
  });
})

app.get('/icon/:word', function(req, res) {
  nounProject = new NounProject({
    key: 'c1f6c72669324cf98664b4aee38f5a42',
    secret: 'f2944d3f61e848948f71b98c45bf744a'
  });
  nounProject.getIconByTerm(req.params.word, function(err, data) {
    if (!err) {
      res.send({
        success: true,
        data: data
      });
    } else {
      res.send({
        success: false,
        error: err
      })
    }
  });
})

app.use('/public', express.static(ROOT_PATH + '/public'));

var server = app.listen(SERVER_PORT, function() {
  console.log('server running at http://localhost:' + SERVER_PORT)
});
