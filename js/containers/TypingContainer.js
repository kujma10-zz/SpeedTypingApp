import React from "react";

const TypingContainer = (props) => {

    const handleUserInput = (event) => {
        props.onUserInput(event.target.value)
    }

    return (
        <input
            className="typing-container"
            value={props.currentInput}
            onChange={handleUserInput}
        />
    );

};

TypingContainer.propTypes = {
    onUserInput: React.PropTypes.func.isRequired,
    currentInput: React.PropTypes.string.isRequired,
};

export { TypingContainer as default };
