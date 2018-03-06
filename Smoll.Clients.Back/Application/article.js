﻿
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
        baseUrl: "/articles"
    };

    function listView() {
        function listRowView(row) {
            var onclick = function () {
                alert("Selected Article with id: " + row.id);
            };
            return m("div", { "class": "row" }, [
                m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                m("span", {}, m("a", { "href": router.buildHRef(resource.baseUrl + "/" + row.id) }, row.title))
            ]);
        };

        var resourcesList = [];
        return {
            oninit: function () {
                return app.helpers.resources.restGetAllFn(app.api.baseUrl + resource.baseUrl, function (data) { resourcesList = data; });
            },
            view: function () {
                return app.helpers.views.listViewFn("Articles", resourcesList.map(listRowView));
            }
        };
    };
    router.addRoute(resource.baseUrl, "articles", listView);

    function detailView(args) {
        var resourceId = args.attrs.id;
        var resourceDetails = {};
        return {
            oninit: function () {
                return app.helpers.resources.restGetDetailFn(app.api.baseUrl + resource.baseUrl + "/" + resourceId, function (data) { resourceDetails = data; });
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
    router.addRoute(resource.baseUrl + "/:id", null, detailView);

})(window);
