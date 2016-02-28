var port = 8000;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app).listen(port);
var io = require('socket.io').listen(server);
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

server.listen(port, function() {
    console.log("Listening on port " + port + "...");
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});
