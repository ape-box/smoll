
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
        baseUrl: "/articles",
        listNavLabel: "articles",
        listViewTitle: "Articles",
        detailViewId: "article",
        detailViewTitle: "Article",
        data: {
            create: {
                title: { label: "Title", attributes: { type: "text" } },
                subtitle: { label: "Subtitle", attributes: { type: "text" } },
                slug: { label: "Slug", attributes: { type: "text" } },
                description: { label: "Description", attributes: { type: "text" } },
                abstract: { label: "Abstract", attributes: { type: "text" } },
                content: { label: "Content", attributes: { type: "text" } }
            },
            edit: {
                title: { label: "Title", attributes: { type: "text" } },
                subtitle: { label: "Subtitle", attributes: { type: "text" } },
                slug: { label: "Slug", attributes: { type: "text" } },
                description: { label: "Description", attributes: { type: "text" } },
                abstract: { label: "Abstract", attributes: { type: "text" } },
                content: { label: "Content", attributes: { type: "text" } }
            }
        }
    };

    router.addRoute(resource.baseUrl, resource.listNavLabel, app.helpers.views.listView(resource));
    router.addRoute(resource.baseUrl + "/:id", null, app.helpers.views.detailView(resource));

})(window);
