//Setting up our express server:
const app = require('express')();
//Supply the app to the HTTP server, which will allow express to handle the HTTP requests:
const http = require('http').createServer(app);
//Grab the socket.io module and have it listen to our server object & enable CORS (Cross-Origin Resource Sharing).
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
//(CORS) is an HTTP-header based mechanism that allows a server to indicate any origins 
//(domain, scheme, or port) other than its own from which a browser should permit loading resources.
//So basically, we setting up our SERVER at 3000 that is listening to individual CLIENTS at 8080 - 
//so we are opening two node envs (and 2 terminals)

let players = [];


//When a client connects to or disconnects from that port, 
//we'll log the event to the console with the client's socket id.
io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);

    players.push(socket.id);

    if (players.length === 1) {
        //this is for a TWO player logic! It only emits for the first player
        io.emit('isPlayerA');
    };

    socket.on('dealCards', function () {
        io.emit('dealCards');
    });

    socket.on('cardPlayed', function (gameObject, isPlayerA) {
        io.emit('cardPlayed', gameObject, isPlayerA);
    });

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });
});


http.listen(3000, function () {
    console.log('Server started!');
});
