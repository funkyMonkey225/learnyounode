var net = require('net');

function zeroFill(i) {
    if(i < 10) {
        return ('0' + i);
    } else {
        return i;
    }
}

function date() {
    var d = new Date();
    return (d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes()));
}

var server = net.createServer(function(socket) {
    socket.end(date() + '\n');
})

server.listen(process.argv[2]);