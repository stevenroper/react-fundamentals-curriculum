var React = require('react');
var CityPrompt = require('../components/CityPrompt');

var CityPromptContainer = React.createClass({
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    console.log(this.state.city)
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    });
  },
  render: function () {
    return (
      <CityPrompt
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
      />
    )
  }
});

module.exports = CityPromptContainer;