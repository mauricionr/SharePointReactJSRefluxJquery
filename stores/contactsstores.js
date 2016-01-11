var ContactsStore = Reflux.createStore({
    listenables: [ContactsActions],
    contactslist: [],
    listTitle:'Contacts',
    InternalListName:'Contacts',
    OdataQuery:"",
    absoluteUrl:_spPageContextInfo.webAbsoluteUrl,
    sourceUrl: function(){return this.absoluteUrl+"/_api/web/lists/getbytitle('"+this.listTitle+"')/items?"+this.OdataQuery;},
    init: function() {this.onFetchList();},
    onFetchList: function() {
        $.ajax({
            url: this.sourceUrl(),
            dataType: 'json',
            cache: false,
            context: this,
            success: function(data) {
                this.contactslist = data.value;
                this.trigger(this.contactslist);
            },
            error: function (data) {
	            console.log(JSON.stringify(data));
	        }
        });
    },
   onCreateItem:function(object) {
	    var item = $.extend({"__metadata": { "type": "SP.Data."+this.InternalListName+"ListItem"}}, object);
	    $.ajax({
	        url: this.sourceUrl(),
	        method: "POST",
	        contentType: "application/json;odata=verbose",
	        data: JSON.stringify(item),
	        headers: {"Accept": "application/json;odata=verbose","X-RequestDigest": $("#__REQUESTDIGEST").val()},
	        success: function (data) {
	            this.onFetchList()
	        }.bind(this),
	        error: function (data) {
	            console.log(data.responseJSON.error.message.value);
	        }
	    });
	},
   onDeleteitem:function(){
   	debugger
   },
   onUpdateList:function(){
   	debugger
   }
});
