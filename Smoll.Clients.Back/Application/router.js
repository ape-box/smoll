;(function(w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = {
        routes: [],
        addRoute: function (path, label, ctor) {
            if (typeof (path) !== "string") {
                throw "path must be a string";
            }
            if (typeof (label) !== "string" && label !== null) {
                throw "label must be a string or null";
            }
            if (typeof(ctor) !== "function") {
                throw "ctor must be a function";
            }

            this.routes.push({ path: path, label: label, ctor: ctor });
        },
        buildHRef: function (path) {
            if (typeof (path) !== "string") {
                throw "path must be a string";
            }

            return "/#!" + path;
        },
        buildNavigation: function () {
            return this.routes.reduce(function (instance, route) {
                if (typeof(route.label) === "string") {
                    instance.push({ href: route.path, label: route.label});
                }

                return instance;
            }, []);
        },
        buildRoutes: function () {
            return this.routes.reduce(function (instance, route) {
                instance[route.path] = router;
                return instance;
            }, {});
        },
        defaultRoute: function() {
            return this.routes[0].path;
        },
        onmatch: function (args, requestedPath) {
            return this.routes.reduce(function (sel, route) {
                return sel ? sel : (
                    route.path === requestedPath
                        ? route.ctor(args)
                        : undefined);
            }, undefined);
        }
    };

    app.router = router;
    w.smoll = app;

})(window);
