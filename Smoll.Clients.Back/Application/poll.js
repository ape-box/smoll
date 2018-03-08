
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
        baseUrl: "/polls",
        listViewTitle: "Polls",
        listNavLabel: "polls",
        data: {
            create: {
                title: { label: "Title", attributes: { type: "text" } },
                description: { label: "Description", attributes: { type: "text" } },
                imageUrl: { label: "ImageUrl", attributes: { type: "text" } }
            },
            edit: {
                title: { label: "Title", attributes: { type: "text" } },
                description: { label: "Description", attributes: { type: "text" } },
                imageUrl: { label: "ImageUrl", attributes: { type: "text" } }
            }
        }
    };

    router.addRoute(resource.baseUrl, resource.listNavLabel, app.helpers.views.listView(resource));
    router.addRoute(resource.baseUrl + "/:id", null, app.helpers.views.detailView(resource));

})(window);
