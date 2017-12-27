

var redis = require('redis')
var config = require('./config')["redis"]

client = redis.createClient(config["port"], config["host"])

client.on("error", function (err) {
    client.notAvailable = true
    console.log("Error " + err);
});

module.exports = client