

var http = require('http');
fs =require('fs');
http.createServer(function(req,res){
    req.
    res.writeHead(200,{
        'Content-type': 'text/html'
    })
    var readFile = fs.readFileSync('./index.html');
    res.end(readFile);
}).listen(7000);
console.log('Server running at http://127.0.0.1:1337/');
