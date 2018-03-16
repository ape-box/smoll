
; (function (w) {

    var router = w.smoll.router;

    var resource = {
        router: router,
        baseUrl: "/proposals",
        name: "proposal",
        data: {
            create: {
                title:       { label: "Title",       attributes: { name: "title",       type: "text" } },
                subtitle:    { label: "Subtitle",    attributes: { name: "subtitle",    type: "text" } },
                slug:        { label: "Slug",        attributes: { name: "slug",        type: "text" } },
                description: { label: "Description", attributes: { name: "description", type: "text" } },
                abstract:    { label: "Abstract",    attributes: { name: "abstract",    type: "text" } },
                content:     { label: "Content",     attributes: { name: "content",     type: "text" } }
            },
            edit: {
                title:       { label: "Title",       attributes: { name: "title",       type: "text" } },
                subtitle:    { label: "Subtitle",    attributes: { name: "subtitle",    type: "text" } },
                slug:        { label: "Slug",        attributes: { name: "slug",        type: "text" } },
                description: { label: "Description", attributes: { name: "description", type: "text" } },
                abstract:    { label: "Abstract",    attributes: { name: "abstract",    type: "text" } },
                content:     { label: "Content",     attributes: { name: "content",     type: "text" } }
            }
        }
    };

    router.registerResource(resource);

})(window);
