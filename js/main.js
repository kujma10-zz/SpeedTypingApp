/**
 * Created by Kote on 3/15/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import InputBox from './components/Input';
import WordsContainer from './components/WordsContainer';
import Statistics from './components/Statistics'


var GameComponents = React.createClass({

    getDefaultProps: function() {
        return {
            words: ["answer", "unfold", "exceptionally", "yourself", "dinners", "struck", "kitchen", "surroundings", "provided"],
            wpm: 20,
            accuracy: 10
        };
    },

    render: function () {
        return (
            <div className="gameComponents">
                <h1>Speed Typing app</h1>
                <WordsContainer words={this.props.words} />
                <br/>
                <InputBox />
                <br/>
                <Statistics wpm={this.props.wpm} accuracy={this.props.accuracy}/>
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(GameComponents, null),
    document.getElementById('content')
);

