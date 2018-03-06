﻿
; (function (w, m) {

    var app = w.smoll;
    if (typeof(app) !== "object" || app === null) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (typeof(router) !== "object" || router === null) {
        throw "initialization order error, router is not defined";
    }

    var navigationItemView = function (item) {
        return m("a",
            {
                href: router.buildHRef(item.href),
                "class": "pure-menu-item resource" + (router.helpers.isActive(item.href) >= 1 ? " active" : "")
            },
            item.label);
        };

    var navitationItems = router.buildNavigation();
    var layout = {
        view: function () {
            return m("div", { "class": "pure-g"},
                m("div", { "id": "app", "class": "pure-u-1" }, [
                    m("nav", { "id": "navigation", "class": "pure-menu pure-menu-horizontal" },
                        navitationItems.map(navigationItemView)),
                    m("div", { id: "main" }, "placeholder")]));
        }
    };

    m.mount(document.body, layout);
    m.route(document.getElementById("main"), router.defaultRoute(), router.buildRoutes());

})(window, m);
