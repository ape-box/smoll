
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
                .then(callback);
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
            .then(callback);
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
            .then(callback);
        }
    };

    w.smoll.rest = rest;

})(window);
