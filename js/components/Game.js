import React from "react";
import SpeedTyper from "./SpeedTyper";
import RemoteSpeedTyper from "./RemoteSpeedTyper";


const Game = (props) => {
    if(props.remoteGameInProgress){
        return (
            <div>
                <SpeedTyper />
                <RemoteSpeedTyper />
            </div>
        );
    } else {
        return (
            <div>
                <SpeedTyper />
            </div>
        );
    }

};

export { Game as default };
