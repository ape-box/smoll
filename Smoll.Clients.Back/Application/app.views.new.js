
; (function (w) {

    var api = w.smoll.api;
    var data = w.smoll.data;
    var rest = w.smoll.rest;
    var strPascal = w.smoll.strPascal;
    var renderForm = w.smoll.forms.renderForm;
    var renderInput = w.smoll.forms.renderInput;

    var newResource = function (resourceDef) {
        return function () {
            var resource = {};
            return {
                view: function () {
                    return m("div", { "id": resourceDef.name, "class": "createView" }, [
                        m("h1", { "class": "title" }, strPascal(resourceDef.name) + ": create new"),
                        m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                            m("fieldset",  [].concat(
                                m("legend", "Edit details"),
                                renderForm(resourceDef.data.create, resource),
                                renderForm(data.publishable.edit, resource),
                                renderInput("save", null,
                                    {
                                        type: "button",
                                        onclick: function () {
                                            console.info("Resource New's save");
                                            console.log(resource);
                                            console.log("Saving ...");
                                            rest.post(api.getFullUrl(resourceDef.baseUrl), resource, function (a, b, c) {
                                                console.log("Callback");
                                                console.log(a);
                                                console.log(b);
                                                console.log(c);
                                            });
                                        }
                                    },
                                    { get: function () { return "save"; }})
                            )))
                    ]);
                }
            };
        }
    };

    w.smoll.views.new = newResource;

})(window);
