
; (function (w) {

    var extend = w.smoll.extend;

    var renderInput = function (label, attributes, values) {
        var childs = [];

        var name = attributes["name"];
        if (typeof (name) !== "string") {
            throw "Text input requires the name attribute";
        }

        if (typeof (label) !== "string") {
            throw "Missing label definition for radio " + name;
        }
        if (label !== null) {
            childs.push(m("label", { "for": name }, label));
        }

        extend(attributes,
            {
                name: name,
                placeholder: label,
                oninput: m.withAttr("value", function (v) {
                    values.set(name, v);
                }),
                value: values.get()
            });
        childs.push(m("input", attributes));

        return m("div", { "class": "pure-control-group" }, childs);
    };

    w.smoll.forms.renderInputByType["text"] = renderInput;

})(window);
