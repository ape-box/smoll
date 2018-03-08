
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
        baseUrl: "/proposals",
        listViewTitle: "Proposals",
        listNavLabel: "proposals",
        data: {
            create: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "text", label: "Subtitle" },
                slug: { type: "text", label: "Slug" },
                description: { type: "text", label: "Description" },
                abstract: { type: "text", label: "Abstract" },
                content: { type: "text", label: "Content" }
            },
            edit: {
                title: { type: "text", label: "Title" },
                subtitle: { type: "text", label: "Subtitle" },
                slug: { type: "text", label: "Slug" },
                description: { type: "text", label: "Description" },
                abstract: { type: "text", label: "Abstract" },
                content: { type: "text", label: "Content" }
            }
        }
    };

    router.addRoute(resource.baseUrl, resource.listNavLabel, app.helpers.views.listView(resource));
    router.addRoute(resource.baseUrl + "/:id", null, app.helpers.views.detailView(resource));

})(window);
