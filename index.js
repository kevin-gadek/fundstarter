var fs = require('fs');
var http = require('http');
var port = Number(process.env.PORT || 8080);
var data = fs.readFileSync('public/index.html');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(data);
	});
server.listen(8080);
