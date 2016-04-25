/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";

const StopButton = (props) => {
    const handleStopButton = (event) => props.onStopButtonClick();

    return (
        <div className="stop-button">
            <button
                hidden={!props.gameInProgress}
                onClick={handleStopButton}>
                Stop
            </button>
        </div>


    );
};

StopButton.propTypes = {
    onStopButtonClick: React.PropTypes.func.isRequired,
    gameInProgress: React.PropTypes.bool.isRequired
};

export default StopButton;