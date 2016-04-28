/**
 * Created by Kote on 4/27/2016.
 */
import React from 'react';
import Words from "../components/Words";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        words: state.remote.game.words,
        currentInput: state.remote.game.currentInput,
        pastInput: state.remote.game.pastInput
    }
}

export default connect(mapStateToProps)(Words);