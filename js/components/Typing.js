import React from "react";

const Typing = (props) => {
  const handleUserInput = (event) => props.onUserInput(event.target.value);

  return(
    <input
      className="typing-container"
      value={props.currentInput}
      disabled={!props.gameInProgress}
      onChange={handleUserInput}
    />
  );
};

Typing.propTypes = {
  onUserInput: React.PropTypes.func.isRequired,
  currentInput: React.PropTypes.string.isRequired,
  gameInProgress: React.PropTypes.bool.isRequired
};

export default Typing;
