var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {  
     var map = require('through2-map'); 
     req.pipe(map(function (body) {  
       return body.toString().toUpperCase(); 
     })).pipe(res);
})

server.listen(process.argv[2]); 