/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";

const StartButton = (props) => {
    const handleStartButton = (event) => props.onStartButtonClick();

    return (
        <div className="start-button">
            <button
                hidden={props.gameInProgress}
                disabled={!props.wordsFetched}
                onClick={handleStartButton}>
                Start
            </button>
        </div>

    );
};

StartButton.propTypes = {
    onStartButtonClick: React.PropTypes.func.isRequired,
    gameInProgress: React.PropTypes.bool.isRequired,
    wordsFetched: React.PropTypes.bool.isRequired
};

export default StartButton;