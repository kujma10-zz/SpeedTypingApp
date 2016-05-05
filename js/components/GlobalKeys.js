import React from "react";
import KeyPressListener from './KeyPressListener'

const GlobalKeys = (props) => {
    return (
        <KeyPressListener handleKeyPress={props.handleKeyPress} gameStarted={props.gameStarted}/>
    )
}

export default GlobalKeys;
