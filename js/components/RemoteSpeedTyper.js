/**
 * Created by Kote on 4/27/2016.
 */
import React from "react";
import RemoteWordsContainer from "./../containers/RemoteWordsContainer";
import TypingContainer from "./../containers/TypingContainer";
import RemoteStatsContainer from "./../containers/RemoteStatsContainer";

const RemoteSpeedTyper = (props) => {

        return (
            <div className="RemoteSpeedTyper">
                <div className="wordsbox">
                    <h1> Remote Player </h1>
                    <RemoteStatsContainer />
                    <RemoteWordsContainer />
                </div>
            </div>
        );


};

export { RemoteSpeedTyper as default };
