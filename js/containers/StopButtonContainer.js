/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";
import StopButton from '../components/StopButton';
import { stopGame } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        gameInProgress: state.game.gameInProgress
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStopButtonClick: () => dispatch(stopGame())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StopButton);