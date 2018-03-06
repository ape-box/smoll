; (function (w) {
    var app = w.smoll || {};

    app.api = {
        baseUrl: "http://localhost:62218/api/v1"
    };

    app.helpers = {
        forms: {
            renderInput: function (name, type, label, value) {
                var childs = [];
                if (label !== null) {
                    childs.push(m("label", { "for": name }, label));
                }
                switch (type) {
                    case "text":
                        childs.push(m("input", { "type": type, "name": name, "placeholder": label, "value": value }));
                        return m("div", { "class": "pure-control-group" }, childs);
                    case "submit":
                    case "button":
                        childs.push(m("button", { "type": type, "name": name, "class": "pure-button pure-button-primary" }, value));
                        return m("div", { "class": "pure-controls" }, childs);
                    default:
                        return undefined;
                }
            }
        }
    };

    w.smoll = app;
})(window);
