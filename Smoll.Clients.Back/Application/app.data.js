
; (function (w) {

    w.smoll.data = {};

    var datePicker = w.smoll.datePicker;

    w.smoll.data.definitions = {
        status: {
            Draft: 0,
            Published: 1,
            Archived: 2,
            TakenDown: 3
        }
    };

    w.smoll.data.entityStats = {
        create: {},
        edit: {
            createdBy: { label: "Created by", attributes: { type: "text", readonly: "readonly" } },
            createdDate: { label: "Created date", attributes: { type: "text", readonly: "readonly" } },
            modifiedBy: { label: "Modified by", attributes: { type: "text", readonly: "readonly" } },
            modifiedDate: { label: "Modified date", attributes: { type: "text", readonly: "readonly" } }
        }
    };

    w.smoll.data.publishable = {
        create: {
            status: { label: "Status", attributes: { type: "radio" }, values: w.smoll.data.definitions.status },
            publishDate: { label: "Publish date", attributes: { type: "text", onclick: datePicker("publishDate") } },
            expireDate: { label: "Expire date", attributes: { type: "text", onclick: datePicker("expireDate") } }
        },
        edit: {
            status: { label: "Status", attributes: { type: "radio" }, values: w.smoll.data.definitions.status },
            publishDate: { label: "Publish date", attributes: { type: "text", onclick: datePicker("publishDate") } },
            expireDate: { label: "Expire date", attributes: { type: "text", onclick: datePicker("expireDate") } }
        }
    };

})(window);
