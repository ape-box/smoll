
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
                    return rest.get(api.getFullUrl(resourceDef.baseUrl, resourceId), function (response) {
                        if (response.status === "OK") {
                            resource = response.data;
                        }
                        else if (response.errors instanceof Array) {
                            alert(response.errors.join("\r\n"));
                        }
                        else {
                            console.error(response.status);
                            console.log(response);
                        }
                    });
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
                                renderInput(null,
                                    {
                                        type: "button",
                                        onclick: function () {
                                            console.info("Resource Edit's update");
                                            console.log(resource);
                                            console.log("Saving ...");
                                            rest.put(api.getFullUrl(resourceDef.baseUrl, resourceId), resource, function (a, b, c) {
                                                console.log("Callback");
                                                console.log(a);
                                                console.log(b);
                                                console.log(c);
                                                console.log(resource);
                                            });
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
