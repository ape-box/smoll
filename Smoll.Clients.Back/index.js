//; $(function () {

//    var ArticleModel = Backbone.Model.extend({
//        defaults: function () {
//            return {
//                title: "Im a title"
//            };
//        },
//        message: function () {
//            console.log(this);
//            alert(this.get("title"));
//        }
//    });

//    var ArticleView = Backbone.View.extend({
//        tagName: "div",
//        template: _.template("<div class=\"articleView\"><b><%=title%></b?</div>"),
//        events: {
//            "click": "alertTitle"
//        },
//        initialize: function () {
//            console.log(this.model);
//            this.listenTo(this.model, 'click', this.alertTitle);
//            this.render();
//            return this;
//        },
//        render: function () {
//            this.$el.html(this.template(this.model.toJSON()));
//            return this;
//        },
//        alertTitle: function () {
//            this.model.message();
//        },
//    });

//    var AppContainerView = Backbone.View.extend({
//        resourceView: null,
//        el: $("#mainApp"),
//        initialize: function () {
//            this.render();

//            return this;
//        },
//        renderEmpty: function () {
//            this.$el.html("HW");
//        },
//        renderResource: function(resource) {
//            if (this.resourceView != null) {
//                this.resourceView.remove();
//                this.resourceView.unbind();
//            }

//            this.resourceView = resource;
//            this.resourceView.render();
//            this.$el.html(this.resourceView.$el);
//        },
//        render: function (resource) {
//            if (resource == undefined || resource == null) {
//                this.renderEmpty();
//            }
//            else {
//                this.renderResource(resource);
//            }
//        }
//    });

//    var AppRouter = Backbone.Router.extend({
//        routes: {
//            "": "home",
//            "article": "article"
//        },
//        article: function () {
//            console.log("article");
//            var resource = new ArticleView({ model: new ArticleModel({ title: "article" }) });
//            this.appContainer.render(resource);
//        },
//        home: function () {
//            console.log("home");
//            var resource = new ArticleView({ model: new ArticleModel({ title: "home" }) });
//            this.appContainer.render(resource);
//        },
//        appContainer: null,
//        resourceView: null,
//        initialize: function () {
//            this.appContainer = new AppContainerView;

//            return this;
//        }
//    });

//    var appInstance = new AppRouter();
//    Backbone.history.start();
//});
