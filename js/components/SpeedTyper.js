import React from "react";
import WordsContainer from "./../containers/WordsContainer";
import TypingContainer from "./../containers/TypingContainer";
import StatsContainer from "./../containers/StatsContainer";

const SpeedTyper = (props) => {
  return (
    <div className="SpeedTyper">
      <div className="wordsbox">
        <StatsContainer
        />
        <WordsContainer
        />
        <TypingContainer
          currentInput={props.currentInput}
          onUserInput={props.onUserInput}
        />
      </div>
    </div>
  );
};

SpeedTyper.propTypes = {
  currentInput: React.PropTypes.string.isRequired,
  onUserInput: React.PropTypes.func.isRequired
};

export { SpeedTyper as default };
