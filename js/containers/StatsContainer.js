import React from "react";
import Stats from "./../components/Stats";
import { connect } from 'react-redux'
import { calculateAccuracy, calculateWordsPerMinute } from '../reducers'

const StatsContainer = (props) => {
    return (
      <Stats
        wordsPerMinute={props.wordsPerMinute}
        accuracy={props.accuracy}
      />
    );
}

const mapStateToProps = (state) => {
  return {
    wordsPerMinute: calculateWordsPerMinute(state),
    accuracy: calculateAccuracy(state)
  }
}

StatsContainer.propTypes = {
  wordsPerMinute: React.PropTypes.string.isRequired,
  accuracy: React.PropTypes.string.isRequired
};

export default connect(
    mapStateToProps
)(StatsContainer)


