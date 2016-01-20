/* global React */
var ContactForm = React.createClass({
  getInitialState:function(){
  	return {
  		newContact:{}
  	}
  },
  addListItem:function(){
    ContactsStore.onCreateItem(this.state.newContact)
    this.setState({
    	newContact:{}
    });
    for(var key in this.refs){
		this.refs[key].value = '';
    }
  },
  handleChange:function(Field,event){
  	 this.state.newContact[Field] = event.target.value
  	 this.setState({
  	 	obj: this.state.obj,
  	 	isEditing:true
  	 });
  },
  render: function() {
    return (
      React.createElement('div', {className: 'ContactForm'},
        React.createElement('input', {
          ref:'Title',
          type: 'text',
          placeholder: 'Title (required)',
          onChange:this.handleChange.bind(null,'Title')
        }),
        React.createElement('input', {
          ref:'Email',
          type: 'text',
          placeholder: 'Email',
          onChange:this.handleChange.bind(null,'Email')
        }),
        React.createElement('textarea', {
          ref:'Description',
          placeholder: 'Description',
          onChange:this.handleChange.bind(null,'Description')
        }),
        React.createElement('button', {type: 'button', onClick:this.addListItem}, "Add Contact")
      )
    )
  },
});