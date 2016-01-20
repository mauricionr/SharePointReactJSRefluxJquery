/* global ContactsStore */
var ContactItem = React.createClass({
  getInitialState:function(){
  	return {
  		isEditing:false,
  		obj:{}
  	}
  },
  deleteItem:function(){
  	ContactsStore.onDeleteItem(this.props)
  },
  editItem:function(){
  	this.setState({
  		isEditing:true
  	})
  },
  handleChange:function(Field,event){
  	 this.state.obj[Field] = event.target.value
  	 this.state.obj.Id = this.props.Id
  	 this.setState({
  	 	obj: this.state.obj,
  	 	isEditing:true
  	 });
  },
  saveItem:function(){
  	ContactsStore.onUpdateList(this.state.obj)
	 this.setState({
  		isEditing:false
  	})
  },
  render: function() {
  	var element;
  	if(!this.state.isEditing){
  		element = (
	      React.createElement('div',{className: 'ContactItem'},
	        React.createElement('div', {className: 'ContactItem-hold'},
	        	React.createElement('p',{className:'Contact-Title'},this.props.Title),
	        	React.createElement('p',{className:'Contact-Descricao'},this.props.Description),
	        	React.createElement('p',{className:'Contact-Email'},this.props.Email),
	        	React.createElement('button',{className:'Contact-Delete',type:'button',onClick:this.deleteItem},'Deletar'),
	        	React.createElement('button',{className:'Contact-Edit',type:'button',onClick:this.editItem},'Editar')
	        )
	      )
	    )
  	}else{
  		element = (
	      React.createElement('div',{className: 'ContactItem'},
	        React.createElement('div', {className: 'ContactItem-hold'},
	        	React.createElement('input',{className:'Contact-Title',type:'Text',defaultValue:this.props.Title,onChange:this.handleChange.bind(null,'Title')}),
	        	React.createElement('input',{className:'Contact-Descricao',type:'Text',defaultValue:this.props.Description,onChange:this.handleChange.bind(null,'Description')}),
	        	React.createElement('input',{className:'Contact-Email',type:'Text',defaultValue:this.props.Email,onChange:this.handleChange.bind(null,'Email')}),
	        	React.createElement('button',{className:'Contact-Delete',type:'button',onClick:this.deleteItem},'Deletar'),
	        	React.createElement('button',{className:'Contact-SaveItem',type:'button',onClick:this.saveItem},'Salvar')
	        )
	      )
	    )
  	}
    return element
  },
});
