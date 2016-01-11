var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
    contacts:React.PropTypes.array.isRequired
  },
  getInitialState:function(){
  	return {
  		contact:this.props.contact,
  		contacts:this.props.contacts
  	}
  },
  addListItem:function(){
  	this.props.contact.Title = this.refs.Title.value;
  	this.props.contact.Email = this.refs.Email.value;
  	this.props.contact.Description = this.refs.Description.value;
    ContactsStore.onCreateItem(this.props.contact)
    this.setState({
    	contact:newContact
    });
  },
  render: function() {
    return (
      React.createElement('div', {className: 'ContactForm'},
        React.createElement('input', {
          ref:"Title",
          type: 'text',
          placeholder: 'Title (required)',
          value: this.props.contact.name,
        }),
        React.createElement('input', {
	      ref:"Email",
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('textarea', {
          ref:"Description",
          placeholder: 'Description',
          value: this.props.contact.description,
        }),
        React.createElement('button', {type: 'button', onClick:this.addListItem}, "Add Contact")
      )
    )
  },
});
