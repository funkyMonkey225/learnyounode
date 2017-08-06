//HTTP server, serves JSON data when it receives GET request to path '/api/parsetime' or '/api/unixtime'

var fs = require('fs');
var http = require('http');
var url = require('url');

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time) {
    return { unixtime: time.getTime() };
}

var server = http.createServer(function (request, response) {
    
    if (request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'applicaiton/json'})
        var parsedUrl = url.parse(request.url, true)
        var time = new Date(parsedUrl.query.iso)
        if (parsedUrl.pathname ===  '/api/parsetime') {
            var result = parsetime(time);
        } else if (parsedUrl.pathname === '/api/unixtime') {
            result = unixtime(time);
        } else {
            result = "Please enter a valid endpoint url.";
        }
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(405);
        response.end();
    }
})

server.listen(process.argv[2]); 