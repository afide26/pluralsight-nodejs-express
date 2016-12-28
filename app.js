var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src/views'));

app.get('/', function(req, res){
  res.send('Hello from Express');
});

app.get('/books', function(req, res){
  res.send('Hello from Books');
});

app.listen(port, function(err){
  if(!err){
    console.log('Listening at port:' + port);
  }
});