import React from 'react';
import Words from "../components/Words";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        words: state.game.words,
        currentInput: state.game.currentInput,
        pastInput: state.game.pastInput
    }
}

export default connect(mapStateToProps)(Words);

