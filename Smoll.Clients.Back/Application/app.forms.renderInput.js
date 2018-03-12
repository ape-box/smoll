
; (function (w) {

    var extend = w.smoll.extend;

    var renderInput = function (name, label, attributes, valueField) {
        var childs = [];
        if (label !== null) {
            childs.push(m("label", { "for": name }, label));
        }
        switch (attributes["type"]) {
            case "text":
                extend(attributes,
                    {
                        type: "text",
                        name: name,
                        placeholder: label,
                        oninput: m.withAttr("value", function (v) {
                            valueField.set(name, v);
                        }),
                        value: valueField.get()
                    });
                childs.push(m("input", attributes));
                return m("div", { "class": "pure-control-group" }, childs);
            case "submit":
            case "button":
                extend(attributes,
                    {
                        name: name,
                        "class": "pure-button pure-button-primary"
                    });
                childs.push(m("button", attributes, valueField.get()));
                return m("div", { "class": "pure-controls" }, childs);
            default:
                throw "missing attribute type in rendering input";
        }
    };

    w.smoll.forms.renderInput = renderInput;

}) (window);