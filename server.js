//const { response } = require("express");
var http = require("http");

http.createServer(function (req, res) 
{
    //Send the HTTP header
    //HTTP status: 200: OK
    //Content-Type: text/plain
    response.writeHead(200, { 'Conten-Type' : 'text/plain' });

    //Send the response body as "Hello world"
    response.end('Hello world\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081')

