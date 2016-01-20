/* global Reflux */
var ContactView = React.createClass({
  mixins: [Reflux.connect(ContactsStore , 'contactsstore')],
  render: function() {
  	if(this.state.contactsstore){
       var contactItemElements;
  	   if(this.state.contactsstore.length === 0){
  	   		contactItemElements = React.createElement('div', {className: 'ContactView-list'},'Nenhum contato encontrado')
  	   }else{
	  	   	contactItemElements = this.state.contactsstore.map(function(contact,index,array) {
		   		contact.key = contact.Id
		   		return React.createElement(ContactItem,contact)
		   })
  	   }
      return (
	      React.createElement('div', {className: 'ContactView'},
	        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
	        React.createElement('div', {className: 'ContactView-list'}, contactItemElements),
	        React.createElement(ContactForm)
	      )
	    )
  	}else{  		
  		return (React.createElement('div', {className: 'LoadingView'},'Loading...'))  		
  	}
  },
});