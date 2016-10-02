var fs = require('fs');
var http = require('http');
var port = Number(process.env.PORT || 8080);
var requestListener = function(req, res)
{
	fs.open('public/index.html', 'r', function(err, fd){
		if(err) return console.log(err);

		var buffer = new Buffer(2500);
		fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer)
		{
			var data = buffer.toString('utf8');
			res.writeHeader(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		}); //end read
	}); 

};


var server = http.createServer(requestListener);
server.listen(port);
