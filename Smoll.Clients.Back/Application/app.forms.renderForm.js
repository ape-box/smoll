
; (function(w) {

    var renderInput = w.smoll.forms.renderInput;

    var renderForm = function(definition, data) {
        var fields = [];
        for (var name in definition) {
            if (definition.hasOwnProperty(name)) {
                if (data[name] === null) {
                    data[name] = null;
                }
                (function(resource, attrName) {
                    fields.push(
                        renderInput(
                            attrName,
                            definition[attrName]["label"],
                            definition[attrName]["attributes"],
                            {
                                get: function () { return resource[attrName]; },
                                set: function (name, value) { resource[name] = value; }
                            }));
                })(data, name);
            }
        }

        return fields;
    };

    w.smoll.forms.renderForm = renderForm;

}) (window);