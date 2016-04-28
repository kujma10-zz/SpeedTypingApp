/**
 * Created by Kote on 4/28/2016.
 */
import React from 'react';
import Game from "../components/Game";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        remoteGameInProgress: state.remote.game.gameInProgress,
    }
}

export default connect(mapStateToProps)(Game);