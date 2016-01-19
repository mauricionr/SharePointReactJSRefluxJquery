var ContactView = React.createClass({
  mixins: [Reflux.connect(ContactsStore , 'contactsstore')],
  propTypes: {
    newContact: React.PropTypes.object.isRequired,
  },
  render: function() {
  	if(this.state.contactsstore){
	   var contactItemElements = this.state.contactsstore.map(function(contact,index,array) {
	   		contact.key = contact.Id
	   		return React.createElement(ContactItem,contact)
	   })
      return (
	      React.createElement('div', {className: 'ContactView'},
	        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
	        React.createElement('div', {className: 'ContactView-list'}, contactItemElements),
	        React.createElement(ContactForm, {
	          contact: this.props.newContact,
	          contacts:this.state.contactsstore
	        })
	      )
	    )
  	}else{  		
  		return (React.createElement('div', {className: 'LoadingView'},'Loading...'))  		
  	}
  },
});