function start(response) {
	
	var request=require('request');
	//request('https://api.vineapp.com/timelines/popular', function(err,res,body){ 

	  //console.log(JSON.stringify(JSON.parse(res['body'])['data']['records'][0]['videoUrl']));
	  //response.writeHead(200, {"Content-Type": "text/html"});
		//response.write(JSON.stringify(JSON.parse(res['body'])['data']['records'][0]['thumbnailUrl']));
		//response.end();
	//	console.log(JSON.stringify(JSON.parse(res['body'])['data']['records'][0]['thumbnailUrl']));
		//"http://v.cdn.vine.co/r/videos/15AD2F41671432497816349057024_1e2b8eced3b.4.7.mp4?versionId=E2CZFilF_2uReNtJTvudBoYh8xn_NOBi"
	  
	//});

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