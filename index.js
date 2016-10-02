var fs = require('fs');
var http = require('http');
var port = Number(process.env.PORT || 8080);

http.createServer(function(req, res){
	fs.readFile('public/index.html', function (err, data){
		res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
		res.write(data);
		res.end();
	});
}).listen(8080);
