import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'
import { calculateAccuracy, calculateWordsPerMinute } from '../reducers/SpeedTyperReducer';

const mapStateToProps = (state) => {
    return {
        accuracy: calculateAccuracy(state.game),
        wordsPerMinute: calculateWordsPerMinute(state.game),
        bestWordsPerMinute: state.game.bestWordsPerMinute,
        bestAccuracy: state.game.bestAccuracy
    }
};

export default connect(mapStateToProps)(Stats);


