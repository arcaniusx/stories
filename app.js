/**
 * Module Dependencies
 */
var express = require('express'),
    app = express.createServer(),
    root = __dirname;

Server = {
    app: app,
    commands: require('./lib/commands.js'),
    port: 3030,
    paths: {
        root:  root,
        controllers:  [root,'app','controllers'].join('/'),
        models:  [root,'app','models'].join('/'),
        public:  [root,'public'].join('/'),
        views:  [root,'app','views'].join('/')
    },
    vendors: {
        express: express,
        everyauth: require('everyauth'),
        io: require("socket.io"),
        mongoose: require('mongoose'),
        mongooseAuth: require('mongoose-auth'),
        stylus: require('stylus')
    }
};

Server.commands.config().run();