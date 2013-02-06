var port = process.env.PORT || 5000;
var express = require('express');
var app = express();
var less = require('less-middleware');
var os = require('os');

app.use(express.logger());

app.use(express.static(__dirname + '/public'));

app.use(less({
  src: __dirname + '/views',
  dest: os.tmpDir() + '/views',
  compress: true
}));

app.use(express.static(os.tmpDir() + '/views'));

app.get('/', function(req, res) {
  res.render('index.jade');
});

app.listen(port, function() {
  console.log('listening on port ' + port);
});