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
api.setGroupLightState(0, state, function(err, result) {
    if (err) throw err;
    console.log(err)
    displayResult(result);
});
