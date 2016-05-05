import React from "react";
import StartButton from "../components/StartButton";
import { connect } from 'react-redux'
import { startGame, endGame, startWordFetch } from '../actions';
import { isStarted } from '../reducers';
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
  return {
    isStarted: isStarted(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(startGame())
      dispatch(startWordFetch())
    },
    onEndClick: () => {
      dispatch(endGame())
      dispatch(push("/pastGames"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
