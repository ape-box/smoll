
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
        name: "article",
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

    router.registerResource(resource);

})(window);
