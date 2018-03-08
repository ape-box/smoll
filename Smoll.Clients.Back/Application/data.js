
; (function (w) {

    var app = w.smoll;
    if (app === undefined) {
        throw "initialization order error, smoll is not defined";
    }

    var data = {
        entityStats: {
            create: {},
            edit: {
                createdBy: { label: "Created by", attributes: { type: "text", readonly: "readonly" } },
                createdDate: { label: "Created date", attributes: { type: "text", readonly: "readonly" } },
                modifiedBy: { label: "Modified by", attributes: { type: "text", readonly: "readonly" } },
                modifiedDate: { label: "Modified date", attributes: { type: "text", readonly: "readonly" } }
            }
        },
        publishable: {
            create: {
                status: { label: "Status", attributes: { type: "text" } },
                publishDate: { label: "Publish date", attributes: { type: "text" } },
                expireDate: { label: "Expire date", attributes: { type: "text" } }
            },
            edit: {
                status: { label: "Status", attributes: { type: "text" } },
                publishDate: { label: "Publish date", attributes: { type: "text" } },
                expireDate: { label: "Expire date", attributes: { type: "text" } }
            }
        }
    };

    app.data = data;

})(window);
