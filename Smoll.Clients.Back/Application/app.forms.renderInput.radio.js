
; (function (w) {

    var extend = w.smoll.extend;

    var renderInput = function (label, attributes, values) {
        var childs = [];

        var name = attributes["name"];
        if (typeof (name) !== "string") {
            throw "Radio input requires the name attribute";
        }

        if (typeof (label) !== "string") {
            throw "Missing label definition for radio " + name;
        }

        childs.push(m("label", { "for": name }, label));

        var options = [];
        for (var opt in values) {
            if (values.hasOwnProperty(opt) && (typeof (values[opt]) === "string" || typeof (values[opt]) === "number")) {
                var option = m("input",
                    extend({}, attributes,
                    {
                        name: name,
                        oninput: m.withAttr("value", function (v) {
                            values.set(name, v);
                        }),
                        value: values[opt],
                        checked: values.get() === values[opt]
                    }), null);
                options.push(m("label", { "for": name }, [option, opt]));
            }
        }
        childs.push(m("div", { "class": "pure-radio" }, options));

        return m("div", { "class": "pure-control-group" }, childs);
    };

    w.smoll.forms.renderInputByType["radio"] = renderInput;

})(window);
