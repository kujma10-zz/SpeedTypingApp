/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";

const StartButton = (props) => {
    const handleStartButton = (event) => props.onStartButtonClick();
    const handleStopButton = (event) => props.onStopButtonClick();

    if (!props.gameInProgress) {
        return (
            <button
                disabled={!props.wordsFetched}
                onClick={handleStartButton}>
                Start
            </button>
        );
    } else {
        return (
            <button
                onClick={handleStopButton}>
                Stop
            </button>
        );
    }

};

StartButton.propTypes = {
    onStartButtonClick: React.PropTypes.func.isRequired,
    gameInProgress: React.PropTypes.bool.isRequired,
    onStopButtonClick: React.PropTypes.func.isRequired,
    wordsFetched: React.PropTypes.bool.isRequired
};

export default StartButton;