;(function(w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = {
        routes: [],
        addRoute: function(path, ctor) {
            if (typeof(path) !== "string") {
                throw "path must be a string";
            }
            if (typeof(ctor) !== "function") {
                throw "ctor must be a function";
            }

            this.routes.push({ path: path, ctor: ctor });
        },
        defaultRoute: function() {
            return this.routes[0].path;
        },
        build: function () {
            return this.routes.reduce(function (instance, route) {
                instance[route.path] = router;
                return instance;
            }, {});
        },
        onmatch: function (args, requestedPath) {
            console.info("args");
            console.log(args);
            console.info("requestedPath");
            console.log(requestedPath);
            return this.routes.reduce(function(sel, route) {
                return sel
                    ? sel
                    : (route.path == requestedPath
                        ? route.ctor()
                        : undefined);
            }, undefined);
        }
    };

    app.router = router;
    w.smoll = app;

})(window);
