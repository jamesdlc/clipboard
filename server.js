var express = require('express');
var app = express();
var bodyParse = require('body-parser');

app.use(bodyParse.json());

app.use(express.static(__dirname));

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Express server is running on http://localhost:' + port + '/');
  console.log('App environment: ' + app.get('env') + '.');
});
