﻿
; (function (w) {


    var views = w.smoll.views;
    var strPlural = w.smoll.strPlural;

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
                instance[route.path] = route.ctor;

                return instance;
            }, {});
        },
        defaultRoute: function() {
            return this.routes[0].path;
        },
        helpers: {
            isActive: function (path) {
                var matches = 0, cr = m.route.get();
                if (cr) {
                    var actual = cr.split("/");
                    var expected = path.split("/");
                    for (var i = 0; i < expected.length; i++) {
                        if (actual[i].length > 0 && expected[i] === actual[i]) {
                            matches += 1;
                        }
                    }
                }

                return matches;
            }
        },
        registerResource: function (resourceDef) {
            router.addRoute(resourceDef.baseUrl, strPlural(resourceDef.name), views.list(resourceDef));
            router.addRoute(resourceDef.baseUrl + "/new", null, views.new(resourceDef));
            router.addRoute(resourceDef.baseUrl + "/:id", null, views.edit(resourceDef));
        }
    };

    w.smoll.router = router;

})(window);