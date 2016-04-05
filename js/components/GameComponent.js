/**
 * Created by Kote on 4/5/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './Input';
import WordsContainer from './WordsContainer';
import Statistics from './Statistics'


var GameComponent = React.createClass({

    getDefaultProps: function() {
        return {
            words: ["answer", "unfold", "exceptionally", "yourself", "dinners", "struck", "kitchen", "surroundings", "provided"],
            wpm: 20,
            accuracy: 10
        };
    },

    checkInput(input){
        console.log(input)
    },

    render: function () {
        return (
            <div className="gameComponents">
                <h1>Speed Typing app</h1>
                <WordsContainer words={this.props.words} />
                <br/>
                <InputBox checkInput={this.checkInput} />
                <br/>
                <Statistics wpm={this.props.wpm} accuracy={this.props.accuracy}/>
            </div>
        );
    }
});

export default GameComponent;