var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  },
  space: {
    marginBottom: '10px',
    marginRight: '10px'
  }
}

function SubmitButton (props) {
  return (
    <button
      className='btn btn-lrg btn-success'
      style={styles.space}
      onClick={props.onSubmitCity}>
      {props.children}
    </button>
  )
}

function CityInput (props) {
  return (
    <input
      className='form-control'
      placeholder='City, State'
      onChange={props.onUpdateCity}
      style={styles.space}
      type='text'
      value={props.city} />
  )
}

function CityPrompt (props) {
  return (
    <div style={styles.container}>
      <CityInput 
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <SubmitButton
        onSubmitCity={props.onSubmitCity}>
        Get Weather
      </SubmitButton>
    </div>
  )
}

CityPrompt.propTypes = {
  city: PropTypes.string.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired
}

module.exports = CityPrompt;