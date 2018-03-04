
; (function (w, m) {

    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var layout = {
        view: function () {
            return m("div", { "class": "app" }, [
                m("nav", { "class": "navigation" }, [
                    m("a", { href: "/#!/Article" }, "Article"),
                    m("a", { href: "/#!/Poll" }, "Poll")]),
                m("div", { id: "main" }, "placeholder")]);
        }
    };

    m.mount(document.body, layout);
    //m.route(document.getElementById("main"), router.defaultRoute(), {
    m.route(document.getElementById("main"), router.defaultRoute(), router.build());

})(window, m);
