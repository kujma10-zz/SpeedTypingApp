import React from "react";
import WordsContainer from "./../containers/WordsContainer";
import TypingContainer from "./../containers/TypingContainer";
import StatsContainer from "./../containers/StatsContainer";
import StartButtonContainer from "./../containers/StartButtonContainer"
import StopButtonContainer from "./../containers/StopButtonContainer"

const SpeedTyper = (props) => {
  return (
      <div className="SpeedTyper">
        <div className="wordsbox">
          <StatsContainer />
          <WordsContainer />
          <TypingContainer />
        </div>
        <StartButtonContainer/>
        <StopButtonContainer/>
      </div>
  );
};

export { SpeedTyper as default };
