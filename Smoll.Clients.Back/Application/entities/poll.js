
; (function (w) {

    var router = w.smoll.router;

    var resource = {
        router: router,
        baseUrl: "/polls",
        name: "poll",
        data: {
            create: {
                title:       { label: "Title",       attributes: { name: "title",       type: "text" } },
                description: { label: "Description", attributes: { name: "description", type: "text" } },
                imageUrl:    { label: "ImageUrl",    attributes: { name: "imageUrl",    type: "text" } }
            },
            edit: {
                title:       { label: "Title",       attributes: { name: "title",       type: "text" } },
                description: { label: "Description", attributes: { name: "description", type: "text" } },
                imageUrl:    { label: "ImageUrl",    attributes: { name: "imageUrl",    type: "text" } }
            }
        }
    };

    router.registerResource(resource);

})(window);
