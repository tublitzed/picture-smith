require('dotenv').config();

var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var app = express();
var compiler = webpack(config);

var bodyParser = require('body-parser'); // for reading JSON in requests.
var ResponseHelpers = require('./response/');
var ROOT_PATH = __dirname + '/../';

app.use(bodyParser.json());
app.use('/public', express.static(ROOT_PATH + '/public'));

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../', 'app/views/index.html'));
});

app.post('/api/images', function(req, res) {
  ResponseHelpers.getImages(res, [], req.body.words, 0);
})

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
