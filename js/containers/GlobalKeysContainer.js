import { connect } from 'react-redux'
import GlobalKeys from '../components/GlobalKeys'
import { keyPressed } from '../actions/GlobalKeys'
import { isStarted } from '../reducers';

const mapStateToProps = (state) => {
  return {
    gameStarted: isStarted(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeyPress: (key) => dispatch(keyPressed(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalKeys)
