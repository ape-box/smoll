
//var Poll = function () {
//    return {
//        Title: null,
//        Subtitle: null,
//        Slug: null,
//        Description: null,
//        Abstract: null,
//        Content: null,

//        Status: null,
//        PublishDate: null,
//        ExpireDate: null,

//        Id: null,
//        CreatedDate: null,
//        ModifiedDate: null,
//        CreatedBy: null,
//        ModifiedBy: null,
//        EntityModifiable: null,
//        EntityVisible: null,
//        Version: null,

//        view: function () {
//            return m("div", { "class": "poll" }, [
//                m("h1", { "class": "title" }, this.Title),
//                m("div", { "class": "subtitle" }, this.Subtitle),
//                m("div", { "class": "slug" }, this.Slug),
//                m("div", { "class": "body" }, [
//                    m("p", { "class": "abstract" }, this.Abstract),
//                    m("p", { "class": "content" }, this.Content)
//                ])
//            ]);
//        }
//    }
//};

; (function (w) {
    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    function pollRowView(row) {
        var onclick = function () {
            alert("Selected Poll with id: "+row.id);
        };
        return m("div", { "class": "row" }, [
            m("span", {}, m("input", { "type": "checkbox", onclick: onclick })),
            m("span", {}, m("a", { "href": router.buildHRef("/poll/" + row.id) }, row.title))
        ]);
    };

    function listView() {
        var pollsList = [];
        return {
            oninit: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + "/poll",
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                .then(function (items) {
                    pollsList = items;
                });
            },
            view: function () {
                return m("div", { "id": "poll", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Polls"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, pollsList.map(pollRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };

    router.addRoute("/poll", "polls", listView);

    function detailView(a, b, c) {
        console.info("detailView: >>>");
        console.log(a);
        console.log(b);
        console.log(c);
        console.info("<<<<<<<<<<<");

        var pollsList = [];
        return {
            oninit: function (a, b, c) {
                console.info("oninit: >>>");
                console.log(a);
                console.log(b);
                console.log(c);
                console.info("<<<<<<<<<<<");
            },
            view: function (a, b, c) {
                console.info("view: >>>");
                console.log(a);
                console.log(b);
                console.log(c);
                console.info("<<<<<<<<<<<");
                return m("div", { "id": "poll", "class": "listView" }, [
                    m("h1", { "class": "title" }, "Polls"),
                    m("div", { "class": "header" }, "header"),
                    m("div", { "class": "rows" }, pollsList.map(pollRowView)),
                    m("div", { "class": "footer" }, "footer")
                ]);
            }
        };
    };

    router.addRoute("/poll/:id", null, detailView);

})(window);
