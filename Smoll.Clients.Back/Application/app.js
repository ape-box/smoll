
; (function (w) {

    var app = {
        api: {
            baseUrl: "http://localhost:62218/api/v1",
            getFullUrl: function () {
                return app.api.baseUrl + "/" + Array.prototype.slice.call(arguments).join("/");
            }
        },
        helpers: {
            extend: function (out) {
                out = out || {};

                for (var i = 1; i < arguments.length; i++) {
                    if (!arguments[i])
                        continue;

                    for (var key in arguments[i]) {
                        if (arguments[i].hasOwnProperty(key))
                            out[key] = arguments[i][key];
                    }
                }

                return out;
            },
            forms: {
                renderForm: function (definition, data) {
                    var fields = [];
                    for (var name in definition) {
                        fields.push(app.helpers.forms.renderInput(name, definition[name]["label"], definition[name]["attributes"], data[name]));
                    }

                    return fields;
                },
                renderInput: function (name, label, attributes, value) {
                    var childs = [];
                    if (label !== null) {
                        childs.push(m("label", { "for": name }, label));
                    }
                    switch (attributes["type"]) {
                        case "text":
                            app.helpers.extend(attributes,
                                {
                                    type: "text",
                                    name: name,
                                    placeholder: label,
                                    value: value
                                });
                            childs.push(m("input", attributes));
                            return m("div", { "class": "pure-control-group" }, childs);
                        case "submit":
                        case "button":
                            app.helpers.extend(attributes,
                                {
                                    name: name,
                                    "class": "pure-button pure-button-primary"
                                });
                            childs.push(m("button", attributes, value));
                            return m("div", { "class": "pure-controls" }, childs);
                        default:
                            throw "missing attribute type in rendering input";
                    }
                }
            },
            resources: {
                restGetAllFn: function (resourceUrl, callback) {
                    if (typeof (resourceUrl) !== "string") {
                        throw "resourceUrl must be a string";
                    }
                    if (typeof (callback) !== "function") {
                        throw "callback must be a function";
                    }

                    return m.request({
                        method: "GET",
                        url: resourceUrl,
                        config: function (xhr) { xhr.withCredentials = false; }
                    })
                    .then(callback);;
                },
                restGetDetailFn: function (resourceUrl, callback) {
                    if (typeof (resourceUrl) !== "string") {
                        throw "resourceUrl must be a string";
                    }
                    if (typeof (callback) !== "function") {
                        throw "callback must be a function";
                    }

                    return m.request({
                        method: "GET",
                        url: resourceUrl,
                        config: function (xhr) { xhr.withCredentials = false; }
                    })
                    .then(callback);
                }
            },
            views: {
                listViewRowFn: function (router, resourceBaseUrl) {
                    return function (row) {
                        var onclick = function () {
                            alert("Selected resource with id: " + row.id);
                        };
                        return m("div", { "class": "row" }, [
                            m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
                            m("span", {}, m("a", { "href": router.buildHRef(resourceBaseUrl + "/" + row.id) }, row.title))
                        ]);
                    }
                },
                listViewFn: function (title, rowsNodes) {
                    return m("div", { "id": "article", "class": "listView" }, [
                        m("h1", { "class": "title" }, title),
                        m("div", { "class": "header" }, "header"),
                        m("div", { "class": "rows" }, rowsNodes),
                        m("div", { "class": "footer" }, "footer")
                    ]);
                },
                listView: function (resourceDef) {
                    return function () {
                        var resourcesList = [];
                        return {
                            oninit: function () {
                                return app.helpers.resources.restGetAllFn(app.api.getFullUrl(resourceDef.baseUrl), function (data) { resourcesList = data; });
                            },
                            view: function () {
                                var rows = resourcesList.map(app.helpers.views.listViewRowFn(resourceDef.router, resourceDef.baseUrl));
                                return app.helpers.views.listViewFn(resourceDef.listViewTitle, rows);
                            }
                        };
                    };
                },
                detailView: function (resourceDef) {
                    return function (args) {
                        var resourceId = args.attrs.id;
                        var resourceDetails = {};
                        return {
                            oninit: function () {
                                return app.helpers.resources.restGetDetailFn(app.api.getFullUrl(resourceDef.baseUrl, resourceId), function (data) { resourceDetails = data; });
                            },
                            view: function () {
                                return m("div", { "id": resourceDef.detailViewId, "class": "detailView" }, [
                                    m("h1", { "class": "title" }, resourceDef.detailViewTitle + ": '" + resourceDetails.title + "'"),
                                    m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                                        m("fieldset",  [].concat(
                                            m("legend", "Edit details"),
                                            app.helpers.forms.renderForm(resourceDef.data.edit, resourceDetails),
                                            app.helpers.forms.renderForm(app.data.publishable.edit, resourceDetails),
                                            app.helpers.forms.renderForm(app.data.entityStats.edit, resourceDetails),
                                            app.helpers.forms.renderInput("update", null, { type: "button" }, "update")
                                        )))
                                ]);
                            }
                        };
                    }
                }
            }
        }
    };

    w.smoll = app;
})(window);
