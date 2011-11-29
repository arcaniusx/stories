var files = require("fs").readdirSync( './app/controllers' ),
    controllers = {};

files.forEach(function(controller){
    controllers[controller.replace('.controllers.js','')] = require(Server.paths.controllers+'/'+controller);
});

module.exports = Server.actions = controllers;