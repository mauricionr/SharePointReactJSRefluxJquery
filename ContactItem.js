var ContactItem = React.createClass({
  propTypes: {
    Title: React.PropTypes.string,
  },
  render: function() {
    return (
      React.createElement('div',{className: 'ContactItem'},
        React.createElement('div', {className: 'ContactItem-name'}, this.props.Title)
      )
    )
  },
});
