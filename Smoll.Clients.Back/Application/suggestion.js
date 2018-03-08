
; (function (w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var resource = {
        router: router,
        baseUrl: "/suggestions",
        listViewTitle: "Suggestions",
        listNavLabel: "suggestions",
        data: {
            create: {
                title: { type: "text", label: "Title" },
                description: { type: "text", label: "Description" }
            },
            edit: {
                title: { type: "text", label: "Title" },
                description: { type: "text", label: "Description" }
            }
        }
    };

    router.addRoute(resource.baseUrl, resource.listNavLabel, app.helpers.views.listView(resource));
    router.addRoute(resource.baseUrl + "/:id", null, app.helpers.views.detailView(resource));

})(window);
