
; (function (w) {

    var app = {
        api: {
            baseUrl: "http://localhost:62218/api/v1"
        },
        helpers: {
            forms: {
                renderInput: function (name, type, label, value) {
                    var childs = [];
                    if (label !== null) {
                        childs.push(m("label", { "for": name }, label));
                    }
                    switch (type) {
                        case "text":
                            childs.push(m("input", { "type": type, "name": name, "placeholder": label, "value": value }));
                            return m("div", { "class": "pure-control-group" }, childs);
                        case "submit":
                        case "button":
                            childs.push(m("button", { "type": type, "name": name, "class": "pure-button pure-button-primary" }, value));
                            return m("div", { "class": "pure-controls" }, childs);
                        default:
                            return undefined;
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
                        url: app.api.baseUrl + resourceUrl,
                        config: function (xhr) { xhr.withCredentials = false; }
                    })
                    .then(callback);
                }
            },
            views: {
                listViewFn: function (title, rowsNodes) {
                    return m("div", { "id": "article", "class": "listView" }, [
                        m("h1", { "class": "title" }, title),
                        m("div", { "class": "header" }, "header"),
                        m("div", { "class": "rows" }, rowsNodes),
                        m("div", { "class": "footer" }, "footer")
                    ]);
                }
            }
        }
    };

    w.smoll = app;
})(window);
