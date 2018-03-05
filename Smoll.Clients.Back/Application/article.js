
//var Article = function () {
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
//            return m("div", { "class": "article" }, [
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
    console.log(app);
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var router = app.router;
    console.log(router);
    if (router === undefined) {
        throw "initialization order error, router is not defined";
    }

    var Article = {
        view: function () {
            return m("div", { "class": "article" }, [
                m("h1", { "class": "title" }, "Article"),
                m("div", { "class": "subtitle" }, "Subtitle"),
                m("div", { "class": "slug" }, "Slug"),
                m("div", { "class": "body" }, [
                    m("p", { "class": "abstract" }, "Abstract"),
                    m("p", { "class": "content" }, "Content")
                ])
            ]);
        }
    };

    router.addRoute("/article", "articles", function () { return Article; });
})(window);
