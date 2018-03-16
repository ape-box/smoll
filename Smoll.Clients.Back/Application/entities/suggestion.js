
; (function (w) {

    var router = w.smoll.router;

    var resource = {
        router: router,
        baseUrl: "/suggestions",
        name: "suggestion",
        data: {
            create: {
                title:       { label: "Title",       attributes: { name: "title",       type: "text" } },
                description: { label: "Description", attributes: { name: "description", type: "text" } }
            },
            edit: {
                title:       { label: "Title",       attributes: { name: "title",       type: "text" } },
                description: { label: "Description", attributes: { name: "description", type: "text" } }
            }
        }
    };

    router.registerResource(resource);

})(window);
