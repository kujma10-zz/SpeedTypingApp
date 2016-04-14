import React from "react";
import SpeedTyper from "./../components/SpeedTyper";
import { connect } from 'react-redux'
import { updateCurrentInput, moveToNextWord } from '../actions'


const mapStateToProps = (state) => {
  return {
    currentInput: state.currentInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserInput:(text) => handleUserInput(text, dispatch)
  }
};

const handleUserInput = (currentInput, dispatch) => {
  if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " "){
    dispatch(moveToNextWord(currentInput))
  }else{
    dispatch(updateCurrentInput(currentInput))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SpeedTyper);

