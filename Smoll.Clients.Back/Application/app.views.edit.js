
; (function (w) {

    var api = w.smoll.api;
    var data = w.smoll.data;
    var rest = w.smoll.rest;
    var strPascal = w.smoll.strPascal;
    var renderForm = w.smoll.forms.renderForm;
    var renderInput = w.smoll.forms.renderInput;

    var edit = function (resourceDef) {
        return function (args) {
            var resourceId = args.attrs.id;
            var resourceDetails = {};
            return {
                oninit: function () {
                    return rest.get(api.getFullUrl(resourceDef.baseUrl, resourceId), function (data) { resourceDetails = data; });
                },
                view: function () {
                    return m("div", { "id": resourceDef.name, "class": "editView" }, [
                        m("h1", { "class": "title" }, strPascal(resourceDef.name) + ": '" + resourceDetails.title + "'"),
                        m("form", { "action": "javascript:void(0);", "class": "pure-form pure-form-aligned" },
                            m("fieldset",  [].concat(
                                m("legend", "Edit details"),
                                renderForm(resourceDef.data.edit, resourceDetails),
                                renderForm(data.publishable.edit, resourceDetails),
                                renderForm(data.entityStats.edit, resourceDetails),
                                renderInput("update", null,
                                    {
                                        type: "button",
                                        onclick: function () {
                                            console.info("Resource Edit's update");
                                            console.log(resourceDetails);
                                        }
                                    }, "update")
                            )))
                    ]);
                }
            };
        }
    };

    w.smoll.views = w.smoll.views || {};
    w.smoll.views.edit = edit;
})(window);
