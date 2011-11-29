var fs = require("fs"),
    files = fs.readdirSync( './app/models' ),
    path = require("path"),
    models = {};

files.forEach(function(model){
    models[model.replace('.schema.js','')] = require(Server.paths.models+'/'+model);
});

module.exports = Server.models = models;