
; (function (w) {

    var api = w.smoll.api;
    var rest = w.smoll.rest;
    var strPascals = w.smoll.strPascals;

    var listRowViewFn = function(router, resourceBaseUrl) {
        return function(row) {
            var onclick = function() {
                alert("Selected resource with id: " + row.id);
            };
            return m("div",
                { "class": "row" },
                [
                    m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                    m("span", {}, m("a", { "href": router.buildHRef(resourceBaseUrl + "/" + row.id) }, row.title))
                ]);
        }
    };

    var listViewFn = function(title, router, resourceBaseUrl, rowsNodes) {
        return m("div",
            { "id": "article", "class": "listView" },
            [
                m("h1", { "class": "title" }, title),
                m("div", { "class": "header" }, "header"),
                m("div", { "class": "rows" }, rowsNodes),
                m("div",
                    { "class": "footer" },
                    [
                        m("span", { "class": "label" }, "actions"),
                        m("span",
                            { "class": "actions" },
                            m("a",
                                { "href": router.buildHRef(resourceBaseUrl + "/new"), "class": "pure-button" },
                                "new"))
                    ])
            ]);
    };

    var list = function(resourceDef) {
        return function() {
            var resourcesList = [];
            return {
                oninit: function() {
                    return rest.get(api.getFullUrl(resourceDef.baseUrl), function (response) {
                        if (response.status === "OK") {
                            resourcesList = response.data;
                        }
                        else if (response.errors instanceof Array) {
                            alert(response.errors.join("\r\n"));
                        }
                        else {
                            console.error(response.status);
                            console.log(response);
                        }
                    });
                },
                view: function() {
                    var rows = resourcesList.map(listRowViewFn(resourceDef.router, resourceDef.baseUrl));
                    return listViewFn(strPascals(resourceDef.name),
                        resourceDef.router,
                        resourceDef.baseUrl,
                        rows);
                }
            };
        };
    };

    w.smoll.views.list = list;

})(window);
