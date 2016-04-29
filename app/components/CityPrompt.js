var React = require('react');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  },
  space: {
    marginBottom: '10px'
  }
}

function SubmitButton (props) {
  return (
    <button
      className='btn btn-lrg btn-success'
      style={styles.space}>
      {props.children}
    </button>
  )
}

function CityPrompt () {
  return (
    <div style={styles.container}>
      <input className='form-control' placeholder='Enter a city and state' style={styles.space}/>
      <SubmitButton>
        Get Weather
      </SubmitButton>
    </div>
  )
}

module.exports = CityPrompt;