
; (function(w) {

    var extend = w.smoll.extend;
    var renderInput = w.smoll.forms.renderInput;

    var renderForm = function (definition, data) {
        var fields = [];
        for (var name in definition) {
            if (definition.hasOwnProperty(name)) {
                if (data[name] === null) {
                    data[name] = null;
                }
                (function (resource, attrName) {
                    var values = extend(definition[attrName]["values"], {
                        get: function () { return resource[attrName]; },
                        set: function (name, value) { resource[name] = value; }
                    });

                    fields.push(
                        renderInput(
                            definition[attrName]["label"],
                            definition[attrName]["attributes"],
                            values
                        ));
                })(data, name);
            }
        }

        return fields;
    };

    w.smoll.forms.renderForm = renderForm;

}) (window);