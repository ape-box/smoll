/// <reference path="../../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../../Scripts/typings/backbone/index.d.ts"/>

import * as Backbone from "../../Scripts/typings/backbone/index";

export module Article {
    class ArticleModel extends Backbone.Model {
        defaults() {
            return {
                title: "Placeholder"
            }
        }
        message() {
            console.log(this);
            alert(this.get("title"));
        }
    }

   class ArticleView extends Backbone.View {
       tagName: "div"
       template: _.template("<div class=\"articleView\"><b><%=title%></b?</div>")
       events: {
           "click": "alertTitle"
       }
       initialize: function () {
           console.log(this.model);
           this.listenTo(this.model, 'click', this.alertTitle);
           this.render();
           return this;
       }
       render: function () {
           this.$el.html(this.template(this.model.toJSON()));
           return this;
       }
       alertTitle: function () {
           this.model.message();
       }
   }
}
