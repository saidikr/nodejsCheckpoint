var http = require('http');

var url = require('url');

// Create a server
http.createServer( function (request, response) {  
    var data="<h1>Hello Node!!!!</h1>\n"
    response.write(data);


response.end();
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');