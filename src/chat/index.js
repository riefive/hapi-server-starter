let Handlers = require('./handlers');

exports.register = function (server, options) {
    var io = require('socket.io')(server.listener, {
        serveClient: false
    });
    io.on('connection', function (socket) {
        console.log('New connection!');
        socket.on('hello', Handlers.hello);
        socket.on('newMessage', Handlers.newMessage);
        socket.on('goodbye', Handlers.goodbye);

        socket.emit('Oh hii!');
        socket.on('burp', () => {
            socket.emit('Excuse you!');
        });
        socket.on('chat', (text) => {
            console.log(text);
            socket.emit('chat', 'hello client')
        });
    });
};

exports.name = 'hapi-chat';