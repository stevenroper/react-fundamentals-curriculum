var React = require('react');
var PropTypes = React.PropTypes;

function printJSON (data) {
  return <pre>{JSON.stringify(data, null, '  ')}</pre>
}

function WeatherDetails (props) {
  return props.isLoading
    ? <h1>Loading...</h1>
    : <div>
        <h1>Weather and stuff</h1>
        <div>
          {printJSON(props.data)}
        </div>
      </div>
};

WeatherDetails.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}

module.exports = WeatherDetails;