var React = require('react');
var PropTypes = React.PropTypes;
var CityPrompt = require('../components/CityPrompt');
var OpenWeatherHelpers = require('../utils/OpenWeatherHelpers');

var CityPromptContainer = React.createClass({
  getDefaultProps: function () {
    return {
      form_direction: 'column'
    }
  },
  propTypes: {
    form_direction: PropTypes.string
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    OpenWeatherHelpers.getCurrentWeatherData(this.state.city)
      .then(function (data) {
        console.log(data);
      });
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
        direction={this.props.form_direction}
      />
    )
  }
});

module.exports = CityPromptContainer;