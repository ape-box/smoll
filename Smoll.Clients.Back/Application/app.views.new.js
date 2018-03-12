
; (function (w) {

    var data = w.smoll.data;
    var strPascal = w.smoll.strPascal;
    var renderForm = w.smoll.forms.renderForm;
    var renderInput = w.smoll.forms.renderInput;

    var newResource = function (resourceDef) {
        return function () {
            return {
                view: function () {
                    var resource = {};
                    return m("div", { "id": resourceDef.name, "class": "createView" }, [
                        m("h1", { "class": "title" }, strPascal(resourceDef.name) + ": create new"),
                        m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                            m("fieldset",  [].concat(
                                m("legend", "Edit details"),
                                renderForm(resourceDef.data.create, resource, function(attr, value) {
                                    console.log(resource);
                                    resource[name] = value;
                                    console.log(resource);
                                }),
                                renderForm(data.publishable.edit, resource),
                                renderInput("save", null,
                                    {
                                        type: "button",
                                        onclick: function () {
                                            console.info("Resource New's save");
                                            console.log(resource);
                                        }
                                    }, "save")
                            )))
                    ]);
                }
            };
        }
    };

    w.smoll.views.new = newResource;

})(window);
