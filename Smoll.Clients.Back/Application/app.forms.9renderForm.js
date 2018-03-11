
; (function(w) {

    var renderInput = w.smoll.forms.renderInput;

    var renderForm = function(definition, data, handler) {
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
                            resource[attrName],
                            handler));
                })(data, name);
            }
        }

        return fields;
    };

    w.smoll.forms = w.smoll.forms || {};
    w.smoll.forms.renderForm = renderForm;

}) (window);