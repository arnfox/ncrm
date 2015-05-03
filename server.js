var express = require('express');
var Redis = require('ioredis');

var PORT = 8080

var app = express();
app.get('/:name', function(req, res){
  var port = process.env.DB_PORT;
  var ip = process.env['DB_PORT_'+port+'_TCP_ADDR'];
  var redis = new Redis(port, ip);
  redis.incr('cnt').then(function(cnt){
    res.send('My awesome name is - ' + req.param('name') + ' ' + cnt + '\n');
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
