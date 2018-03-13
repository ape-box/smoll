
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

    this.datePicker = function (name) {
        return function(evt) {
            var d = new Date();
            var year = prompt("Which Year", d.getFullYear());
            var month = prompt("Which Month", 1+d.getMonth());
            var day = prompt("Which Day", d.getDate());
            var time = prompt("Which Time", d.getHours()+":"+d.getMinutes());
            var date = year + "-" + month + "-" + day + " " + time;

            console.log("Date is " + date);
            var elements = document.querySelectorAll("#main input[name=" + name+"]");
            for (var i = 0; i < elements.length; i++) {
                elements[i].value = date;
            }
        }
    };

}.bind(window.smoll))(window);
