
; (function (w) {

    var extend = w.smoll.extend;

    var renderInput = function (label, attributes, values) {
        var childs = [];
        extend(attributes,
            {
                "class": "pure-button pure-button-primary"
            });
        childs.push(m("button", attributes, values.get()));

        return m("div", { "class": "pure-controls" }, childs);
    };

    w.smoll.forms.renderInputByType["submit"] = renderInput;
    w.smoll.forms.renderInputByType["button"] = renderInput;

})(window);
