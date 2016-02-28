var express = require('express'),
    http = require('http'),
    io = require('socket.io')(http);

var app = express();
var server = http.createServer(app);
var socket = io.listen(server);

var path = require('path');
var port = 8000;

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log("User has connected");
});

app.listen(port, function(){
    console.log("Server running on port: " + port);
});
