
; (function (w) {

    w.smoll.data = {};

    var datePicker = w.smoll.datePicker;

    w.smoll.data.definitions = {
        status: {
            Draft:     0,
            Published: 1,
            Archived:  2,
            TakenDown: 3
        }
    };

    w.smoll.data.entityStats = {
        create: {},
        edit: {
            createdBy:    { label: "Created by",    attributes: { name: "createdBy",    type: "text", disabled: true } },
            createdDate:  { label: "Created date",  attributes: { name: "createdDate",  type: "text", disabled: true } },
            modifiedBy:   { label: "Modified by",   attributes: { name: "modifiedBy",   type: "text", disabled: true } },
            modifiedDate: { label: "Modified date", attributes: { name: "modifiedDate", type: "text", disabled: true } }
        }
    };

    w.smoll.data.publishable = {
        create: {
            status:      { label: "Status",       attributes: { name: "status",      type: "radio" }, values: w.smoll.data.definitions.status },
            publishDate: { label: "Publish date", attributes: { name: "publishDate", type: "text", onclick: datePicker("publishDate") } },
            expireDate:  { label: "Expire date",  attributes: { name: "expireDate",  type: "text", onclick: datePicker("expireDate") } }
        },
        edit: {
            status:      { label: "Status",       attributes: { name: "status",      type: "radio" }, values: w.smoll.data.definitions.status },
            publishDate: { label: "Publish date", attributes: { name: "publishDate", type: "text", onclick: datePicker("publishDate") } },
            expireDate:  { label: "Expire date",  attributes: { name: "expireDate",  type: "text", onclick: datePicker("expireDate") } }
        }
    };

})(window);
