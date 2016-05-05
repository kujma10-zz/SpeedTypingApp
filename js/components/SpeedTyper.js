import React from "react";
import WordsContainer from "../containers/WordsContainer";
import GlobalKeysContainer from "../containers/GlobalKeysContainer";
import StatsContainer from "../containers/StatsContainer";
import RemoteContainer from "../containers/RemoteContainer";
import StartButtonContainer from "../containers/StartButtonContainer";

const SpeedTyper = (props) => {
    return (
        <div className="SpeedTyper">
            <div className="wordsbox">
                <StatsContainer />
                <WordsContainer />
                <GlobalKeysContainer/>
                <RemoteContainer />
            </div>
            <StartButtonContainer />

        </div>
    );
};

export { SpeedTyper as default };
