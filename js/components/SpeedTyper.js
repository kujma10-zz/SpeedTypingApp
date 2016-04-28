import React from "react";
import WordsContainer from "./../containers/WordsContainer";
import TypingContainer from "./../containers/TypingContainer";
import StatsContainer from "./../containers/StatsContainer";
import StartButtonContainer from "./../containers/StartButtonContainer"
import StopButtonContainer from "./../containers/StopButtonContainer"
import TimerContainer from "./../containers/TimerContainer"
import WordsFetcherContainer from "./../containers/WordsFetcherContainer"

import RemoteSpeedTyper from "./RemoteSpeedTyper";

const SpeedTyper = (props) => {
    return (
        <div className="SpeedTyper">
            <div className="wordsbox">
                <StatsContainer />
                <TimerContainer/>
                <WordsContainer />
                <TypingContainer />
            </div>
            <StartButtonContainer/>
            <StopButtonContainer/>
            <WordsFetcherContainer/>
        </div>
    );
};

export { SpeedTyper as default };
