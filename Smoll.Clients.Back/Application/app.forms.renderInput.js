
; (function (w) {

    var extend = w.smoll.extend;

    var renderInput = function (name, label, attributes, valueField) {
        var childs = [];
        switch (attributes["type"]) {
            case "text":
                if (label !== null) {
                    childs.push(m("label", { "for": name }, label));
                }
                extend(attributes,
                    {
                        name: name,
                        placeholder: label,
                        oninput: m.withAttr("value", function (v) {
                            valueField.set(name, v);
                        }),
                        value: valueField.get()
                    });
                childs.push(m("input", attributes));
                return m("div", { "class": "pure-control-group" }, childs);
            case "radio":
                if (typeof (label) !== "string") {
                    throw "Missing label definition for radio " + name;
                }

                childs.push(m("label", { "for": name }, label));

                var options = [];
                for (var opt in valueField) {
                    if (valueField.hasOwnProperty(opt)) {
                        var option = m("input",
                            extend({}, attributes,
                            {
                                name: name,
                                oninput: m.withAttr("value", function (v) {
                                    valueField.set(name, v);
                                }),
                                value: valueField[opt]
                            }), null);
                        options.push(m("label", { "for": name }, [option, opt]));
                    }
                }
                childs.push(m("div", { "class": "pure-radio" }, options));

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