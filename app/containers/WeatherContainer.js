var React = require('react');
var WeatherDetails = require('../components/WeatherDetails');
var OpenWeatherHelpers = require('../utils/OpenWeatherHelpers');

var WeatherContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      weatherData: {}
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    OpenWeatherHelpers.getCurrentWeatherData(query.city)
      .then(function (data) {
        this.setState({
          isLoading: false,
          weatherData: data
        });
      }.bind(this));
  },
  render: function () {
    return (
      <WeatherDetails
        isLoading={this.state.isLoading}
        data={this.state.weatherData}
      />
    )
  }
});

module.exports = WeatherContainer;