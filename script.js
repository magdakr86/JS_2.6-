var Counter = React.createClass({

  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentDidMount: function() {
    console.log('');
  },

  render: function() {
    return React.createElement('div', {
      className: 'App'
    },

      React.createElement('div', {
        className: 'timer'
      },
      
        React.createElement('span', {}, this.state.counter),
        React.createElement('button', {
          onClick: this.decrement,
          type: 'button',
          className: 'btn btn-primary js-btn-odejmij'
        }, 'Odejmij'),
        React.createElement('button', {
          onClick: this.increment,
          type: 'button',
          className: 'btn btn-primary js-btn-dodaj'
        }, 'Dodaj')
      )
    );
  }
});

var element = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));