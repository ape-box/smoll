
; (function (w) {

    var api = {
        baseUrl: "http://localhost:62218/api/v1",
        getFullUrl: function () {
            return api.baseUrl + Array.prototype.slice.call(arguments).join("/");
        }
    };

    w.smoll.api = api;

})(window);
