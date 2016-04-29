var React = require('react');
var CityPromptContainer = require('../containers/CityPromptContainer');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  prompt_title: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  },
}

var Home = React.createClass({
  render: function (props) {
    return (
      <div style={styles.container}>
        <h1 style={styles.prompt_title}>Enter a City and State</h1>
        <CityPromptContainer />
      </div>
    )
  }
});

module.exports = Home;