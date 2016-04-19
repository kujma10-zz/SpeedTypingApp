/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";

const StopButton = (props) => {
    const handleStopButton = (event) => props.onStopButtonClick();

    return (
        <button
            hidden={!props.gameInProgress}
            className="stop-button"
            onClick={handleStopButton}>
            Stop
        </button>

    );
};

StopButton.propTypes = {
    onStopButtonClick: React.PropTypes.func.isRequired,
    gameInProgress: React.PropTypes.bool.isRequired
};

export default StopButton;