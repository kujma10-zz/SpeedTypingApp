import React from "react";
import SpeedTyper from "./SpeedTyper";
import RemoteSpeedTyper from "./RemoteSpeedTyper";

const Game = (props) => {
    if(props.remoteGameInProgress){
        return (
            <div className="multi-player">
                <SpeedTyper />
                <RemoteSpeedTyper />
            </div>
        );
    } else {
        return (
            <div className="single-player">
                <SpeedTyper />
            </div>
        );
    }

};

export { Game as default };
