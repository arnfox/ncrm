var express = require('express');

var PORT = 8080

var app = express();
app.get('/:name', function(req, res){
  res.send('Hello ' + req.Params['name'] + '!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
