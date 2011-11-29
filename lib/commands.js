module.exports.config = function(){
    var bootstrap = require('bootstrap-stylus'),
        clog = require('clog'),
        paths = Server.paths,
        vendors = Server.vendors,
        app = Server.app,
        express = vendors.express,
        io = vendors.io,
        mongoose = vendors.mongoose,
        mongooseAuth = vendors.mongooseAuth,
        stylus = require('stylus');

    Server.db = mongoose.connect("mongodb://localhost/madlibs");

    require("./controllers.js");
    require("./models.js");

    app.configure(function(){
        //app.use(express.logger());
        app.use(express.methodOverride());
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({ secret: 'key'}));
        app.use(mongooseAuth.middleware());
        app.use(app.router);
        app.use(require('stylus').middleware({
            src: paths.public,
            compile: function(str, path) {
                return stylus(str)
                    .set('filename', path)
                    .set('compress', true)
                    .use(bootstrap());
            }
        }));
        app.use(express.static(paths.public));
        app.set('views', paths.views);
        app.set('view engine', 'jade');
        mongooseAuth.helpExpress(app);
    });

    app.configure('development', function() {
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    app.configure('production', function(){
        app.use(express.errorHandler());
    });


    require("./routes.js");

    //require('everyauth').debug = true;

    return this;
};

module.exports.run = function(){

    Server.app.listen(Server.port || 3030);
    Server.vendors.io.listen(Server.app);
    return this;
};