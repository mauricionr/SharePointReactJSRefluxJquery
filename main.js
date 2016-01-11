var newContact = {Title: null, Email: null, Description: null}
ReactDOM.render(
  React.createElement(ContactView, {
    newContact: newContact
  }),
  document.getElementById('react-app')
)