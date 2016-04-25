/**
 * Created by Kote on 4/19/2016.
 */

import React from "react";
import StartButton from '../components/StartButton';
import { startGame } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        gameInProgress: state.game.gameInProgress,
        wordsFetched: state.game.wordsFetched
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartButtonClick: () => dispatch(startGame())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);