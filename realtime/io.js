const socket = require ("socket.io");

let io;

const init = (http) => {
    io = socket(http);
    io.on('connection', function(socket) {
        console.log('a user connected');
        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
    });

};

const notify = (msg, data) => {
    io.emit(msg, data);
};
module.exports = {
    notify,
    io : init
};