/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";

const Timer = (props) => {
    return (
        <div className="TimerContainer">
            <div className="TimerDiv">Elapsed time: </div>
            <div className="TimerDiv">{props.elapsed}</div>
        </div>
    );
};

Timer.propTypes = {
    elapsed: React.PropTypes.number.isRequired,
}

export { Timer as default }
