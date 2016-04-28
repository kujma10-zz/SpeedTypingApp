/**
 * Created by Kote on 4/27/2016.
 */
import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'
import { calculateAccuracy, calculateWordsPerMinute } from '../reducers/SpeedTyperReducer';

const mapStateToProps = (state) => {
    return {
        accuracy: calculateAccuracy(state.remote.game),
        wordsPerMinute: calculateWordsPerMinute(state.remote.game),
        bestWordsPerMinute: state.remote.game.bestWordsPerMinute,
        bestAccuracy: state.remote.game.bestAccuracy
    }
};

export default connect(mapStateToProps)(Stats);
