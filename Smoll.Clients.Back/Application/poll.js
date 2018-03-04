
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

    var data = {
        polls: {
            list: [],
            fetch: function () {
                m.request({
                    method: "GET",
                    url: app.api.baseUrl + "/poll",
                    config: function (xhr) { xhr.withCredentials = false; }
                })
                .then(function(items) {
                    data.polls.list = items;
                });
            }
        }
    }

    var rowView = function (row) {
        return m("div", { "class": "row" }, [
            m("span", {}, row.id),
            m("span", {}, row.title),
            m("span", {}, "actions")
        ]);
    };

    var listView = {
        oninit: data.polls.fetch,
        view: function () {
            console.info("data.polls.list");
            console.log(data.polls.list);
            return m("div", { "class": "poll" }, [
                m("h1", { "class": "title" }, "Polls"),
                m("div", { "class": "footer" }, "footer actions"),
                m("div", { "class": "rows" }, data.polls.list.map(rowView)),
                m("div", { "class": "footer" }, "footer actions")
            ]);
        }
    };

    router.addRoute("/Poll", function () { return listView; });

})(window);
