
; (function (w) {

    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }


    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Article with id: " + row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef("/article/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + "/article",
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourcesList = data;
                    });
            },
            view: function () {
                return m("div", { "id": "article", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Articles"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, resourcesList.map(listRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };
    router.addRoute("/article", "articles", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + "/article/" + resourceId,
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                    .then(function (data) {
                        resourceDetails = data;
                    });
            },
            view: function () {
                return m("div", { "id": "article", "class": "detailView" }, [
                    m("h1", { "class": "title" }, "Article: '" + resourceDetails.title + "'"),
                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                        m("fieldset", [
                            m("legend", "Edit details"),

                            app.helpers.forms.renderInput("title", "text", "Title", resourceDetails.title),
                            app.helpers.forms.renderInput("subtitle", "text", "Subtitle", resourceDetails.subtitle),
                            app.helpers.forms.renderInput("slug", "text", "Slug", resourceDetails.slug),
                            app.helpers.forms.renderInput("description", "text", "Description", resourceDetails.description),
                            app.helpers.forms.renderInput("abstract", "text", "Abstract", resourceDetails.abstract),
                            app.helpers.forms.renderInput("content", "text", "Content", resourceDetails.content),

                            app.helpers.forms.renderInput("status", "text", "Status", resourceDetails.status),
                            app.helpers.forms.renderInput("publishDate", "text", "Publish date", resourceDetails.publishDate),
                            app.helpers.forms.renderInput("expireDate", "text", "Expire date", resourceDetails.expireDate),

                            app.helpers.forms.renderInput("createdBy", "text", "Created by", resourceDetails.createdBy),
                            app.helpers.forms.renderInput("createdDate", "text", "Created date", resourceDetails.createdDate),
                            app.helpers.forms.renderInput("modifiedBy", "text", "Modified by", resourceDetails.modifiedBy),
                            app.helpers.forms.renderInput("modifiedDate", "text", "Modified date", resourceDetails.modifiedDate),

                            app.helpers.forms.renderInput("update", "button", null, "update")
                        ]))
                ]);
            }
        };
    };
    router.addRoute("/article/:id", null, detailView);
})(window);
