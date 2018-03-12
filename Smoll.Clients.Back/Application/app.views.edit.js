
; (function (w) {

    var api = w.smoll.api;
    var data = w.smoll.data;
    var rest = w.smoll.rest;
    var strPascal = w.smoll.strPascal;
    var renderForm = w.smoll.forms.renderForm;
    var renderInput = w.smoll.forms.renderInput;

    var edit = function (resourceDef) {
        return function (args) {
            var resource = {};
            var resourceId = args.attrs.id;
            return {
                oninit: function () {
                    return rest.get(api.getFullUrl(resourceDef.baseUrl, resourceId), function (data) { resource = data; });
                },
                view: function () {
                    return m("div", { "id": resourceDef.name, "class": "editView" }, [
                        m("h1", { "class": "title" }, strPascal(resourceDef.name) + ": '" + resource.title + "'"),
                        m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                            m("fieldset",  [].concat(
                                m("legend", "Edit details"),
                                renderForm(resourceDef.data.edit, resource),
                                renderForm(data.publishable.edit, resource),
                                renderForm(data.entityStats.edit, resource),
                                renderInput("update", null,
                                    {
                                        type: "button",
                                        onclick: function () {
                                            console.info("Resource Edit's update");
                                            console.log(resource);
                                        }
                                    },
                                    { get: function () { return "update"; }})
                            )))
                    ]);
                }
            };
        }
    };

    w.smoll.views.edit = edit;

})(window);
