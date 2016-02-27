var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(result);
};

var displayError = function(err) {
    console.error(err);
};

var host = "192.168.1.14",
    username = "newdeveloper",
    api = new HueApi(host, username),
    state = lightState.create();
    state2 = lightState.create();
    state3 = lightState.create();

// --------------------------
/* Using a promise

// Set the lamp with id '2' to on
api.setLightState(2, state.on())
    .then(displayResult):w

    .fail(displayError)
    .done();

// Now turn off the lamp
api.setLightState(2, state.off())
    .then(displayResult)
    .fail(displayError)
    .done();

// --------------------------
// Using a callback
// Set the lamp with id '2' to on
api.setLightState(2, state.on(), function(err, result) {
    if (err) throw err;
    displayResult(result);
});
*/
// Now turn off the lamp
// setGroupLightState()
state.on();
state.hsb(140,100,100)
state.bri(255);
state.transitionInstant();

state2.ct(300)
state2.on();
state2.bri(255);
state2.transitionSlow();

state3.ct(153)
state3.on();
state3.bri(128);
state3.transitionSlow();

var healthLight = function(hpp){
state.hsb(140*hpp,100,100)
api.setLightState(8, state, function(err, result) {
    if (err) throw err;
    console.log(err)
    displayResult(result);
});
}


var day = true;


var http = require('http');
var fs = require('fs');
var server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
          body = JSON.parse(body)
          if (body.map !== undefined){
            if (body.map.daytime === true && day !== true){
              day = true;
              api.setGroupLightState(0, state2, function(err, result) {
                console.log("test")
                if (err) throw err;
                console.log(err)
                displayResult(result);
              });
            }
            if (body.map.daytime === false && day !== false){
              day = false;
              api.setGroupLightState(0, state3, function(err, result) {
                console.log("test")
                if (err) throw err;
                console.log(err)
                displayResult(result);
              });
            }

          }

          if (body.hero !== undefined){
            	healthLight(body.hero.health_percent/100)
              console.log("HP %: " + body.hero.health_percent);
          }
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file


var port = 323232;
var host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);
