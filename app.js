var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var app = express();

var port = 8000;


app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

app.listen(port, function(){
    console.log("Server running on port: " + port);
});
