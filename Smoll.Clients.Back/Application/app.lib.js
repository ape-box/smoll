
; (function () {

    this.extend = function (out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }

        return out;
    };

    this.strPlural = function (resourceName) {
        return resourceName.toLowerCase() + "s";
    };

    this.strPascal = function (resourceName) {
        return resourceName.charAt(0).toUpperCase() + resourceName.slice(1).toLowerCase();
    };

    this.strPascals = function (resourceName) {
        return resourceName.charAt(0).toUpperCase() + resourceName.slice(1).toLowerCase() + "s";
    };

    this.createId = function (resourceName) { };

    this.createTitle = function (resourceName) { };

}.bind(window.smoll))(window);
