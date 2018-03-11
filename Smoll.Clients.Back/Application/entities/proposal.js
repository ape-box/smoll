
; (function (w) {

    var router = w.smoll.router;

    var resource = {
        router: router,
        baseUrl: "/proposals",
        name: "proposal",
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
