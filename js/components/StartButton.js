/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";

const StartButton = (props) => {
    const handleStartButton = (event) => props.onStartButtonClick();

    return (
        <button
            hidden={props.gameInProgress}
            className="start-button"
            onClick={handleStartButton}>
            Start
        </button>

    );
};

StartButton.propTypes = {
    onStartButtonClick: React.PropTypes.func.isRequired,
    gameInProgress: React.PropTypes.bool.isRequired,
};

export default StartButton;