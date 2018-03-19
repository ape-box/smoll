
; (function (w) {

    var rest = {
        get: function(resourceUrl, callback) {
            if (typeof (resourceUrl) !== "string") {
                throw "resourceUrl must be a string";
            }
            if (typeof (callback) !== "function") {
                throw "callback must be a function";
            }

            return m.request({
                    method: "GET",
                    url: resourceUrl,
                    config: function(xhr) { xhr.withCredentials = false; }
                })
                .then(callback)
                .catch(function (response) {
                    if (response.code !== 200 || response.response.Status !== "OK") {
                        alert(response.response.Errors.join("\r\n"));
                    }
                });
        },
        post: function (resourceUrl, resource, callback) {
            if (typeof (resourceUrl) !== "string") {
                throw "resourceUrl must be a string";
            }
            if (typeof (callback) !== "function") {
                throw "callback must be a function";
            }

            return m.request({
                method: "POST",
                url: resourceUrl,
                data: resource,
                config: function(xhr) { xhr.withCredentials = false; }
            })
                .then(callback)
                .catch(function (response) {
                    if (response.code !== 200 || response.response.Status !== "OK") {
                        alert(response.response.Errors.join("\r\n"));
                    }
                });
        },
        put: function (resourceUrl, resource, callback) {
            if (typeof (resourceUrl) !== "string") {
                throw "resourceUrl must be a string";
            }
            if (typeof (callback) !== "function") {
                throw "callback must be a function";
            }

            return m.request({
                method: "PUT",
                url: resourceUrl,
                data: resource,
                config: function(xhr) { xhr.withCredentials = false; }
            })
                .then(callback)
                .catch(function (response) {
                    if (response.code !== 200 || response.response.Status !== "OK") {
                        alert(response.response.Errors.join("\r\n"));
                    }
                });
        }
    };

    w.smoll.rest = rest;

})(window);
