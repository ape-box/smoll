
; (function (w) {

    var types = {};

    var renderInput = function (label, attributes, values) {

        var type = attributes["type"];
        if (!types[type]) {
            throw "missing attribute type in rendering input";
        }

        return types[type].call(null, label, attributes, values);
    };

    w.smoll.forms.renderInput = renderInput;
    w.smoll.forms.renderInputByType = types;

})(window);
