
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
        name: "suggestion",
        data: {
            create: {
                title: { label: "Title", attributes: { type: "text" } },
                description: { label: "Description", attributes: { type: "text" } }
            },
            edit: {
                title: { label: "Title", attributes: { type: "text" } },
                description: { label: "Description", attributes: { type: "text" } }
            }
        }
    };

    router.registerResource(resource);

})(window);
