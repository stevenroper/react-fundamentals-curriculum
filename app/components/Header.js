var React = require('react');
var CityPromptContainer = require('../containers/CityPromptContainer');

var styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(235,72,40)'
  },
  app_name: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
    marginLeft: '10px'
  }
}

var Header = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <h1 style={styles.app_name}>Where dat Sun?</h1>
        <CityPromptContainer form_direction='row' />
      </div>
    )
  }
});

module.exports = Header;