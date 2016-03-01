var http = require('http');
var fs = require('fs');

var dump = true;

var server = http.createServer( function(req, res) {

  console.log(req.param);

    if (req.method === 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
          body = JSON.parse(body);
          if (body.provider !== undefined){
            console.log(body);
          }
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        //var html = fs.readFileSync('index.html');
        //res.writeHead(200, {'Content-Type': 'text/html'});
        //res.end(html);
    }

});

var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file


var port = 323232;
var host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
