
; (function (w) {

    var router = w.smoll.router;

    var resource = {
        router: router,
        baseUrl: "/polls",
        name: "poll",
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

    router.registerResource(resource);

})(window);
