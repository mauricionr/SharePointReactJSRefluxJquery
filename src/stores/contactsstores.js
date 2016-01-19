/* global Reflux */
var ContactsStore = Reflux.createStore({
    listenables: [ContactsActions],
    contactslist: [],
    sourceUrl: function () {
        return 'http://jsonplaceholder.typicode.com/users'
    },
    init: function () {
        this.onFetchList();
    },
    onFetchList: function () {
        $.ajax({
            url: this.sourceUrl(),
            dataType: 'json',
            cache: false,
            context: this,
            success: function (data) {
                this.contactslist = data.value;
                this.trigger(this.contactslist);
            },
            error: function (data) {
                console.log(JSON.stringify(data));
            }
        });
    },
    onCreateItem: function (object) {
        $.ajax({
            url: this.sourceUrl(),
            method: "POST",
            contentType: "application/json;odata=verbose",
            data: JSON.stringify(object),
            headers: { "Accept": "application/json;odata=verbose" },
            success: this.onFetchList.bind(this),
            error: function (data) {
                console.log(data.responseJSON.error.message.value);
            }
        });
    },
    onDeleteitem: function () {
        debugger
        // TODO
    },
    onUpdateList: function () {
        debugger
        // TODO
    }
});
