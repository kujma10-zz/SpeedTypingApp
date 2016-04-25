import React from "react";

const Stats = (props) => {
    return (
        <div className="StatsContainer">
            <div className="StatDiv">Word per minute:</div>
            <div className="StatDiv">{props.wordsPerMinute}</div>
            <div className="StatDiv">Accuracy:</div>
            <div className="StatDiv">{props.accuracy}%</div>
            <div className="StatDiv">Best wpm:</div>
            <div className="StatDiv">{props.bestWordsPerMinute}</div>
            <div className="StatDiv">Best accuracy:</div>
            <div className="StatDiv">{props.bestAccuracy}%</div>
        </div>
    );
};
Stats.propTypes = {
    wordsPerMinute: React.PropTypes.number.isRequired,
    accuracy: React.PropTypes.number.isRequired,
}

export { Stats as default }
