var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);
var port = 8000;

express.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log("User has connected");
});

http.listen(port, function(){
    console.log("Server running on port: " + port);
});
