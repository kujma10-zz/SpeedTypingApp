/**
 * Created by Kote on 3/15/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import InputBox from './components/input';
import WordsContainer from './components/text_generator';
import Statistics from './components/statistics'


var GameComponents = React.createClass({
    render: function () {
        return (
            <div className="gameComponents">
                <h1>Speed Typing app</h1>
                <WordsContainer />
                <br/>
                <InputBox />
                <br/>
                <Statistics />
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(GameComponents, null),
    document.getElementById('content')
);

