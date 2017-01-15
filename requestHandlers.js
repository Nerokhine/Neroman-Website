function start(response) {
	
	var request=require('request');
	/*request('http://google.com', function(err,res,body){
	  response.writeHead(200, {"Content-Type": "text/html"});
	  response.write(body);
	  response.end();
	  
	});*/
	var fs = require('fs');
	var index = fs.readFileSync('index.html');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(index);
	response.end();

	console.log("Request handler 'start' was called.");
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;