/**
 * Created by Kote on 4/5/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './InputContainer';
import WordsContainer from './WordsContainer';
import Statistics from './StatisticsContainer'

var currentWordIndex = 0;
var GameComponent = React.createClass({

    getDefaultProps: function() {
        return {
            words: ["answer", "unfold", "exceptionally", "yourself", "dinners", "struck", "kitchen", "surroundings", "provided", "game", "homework", "deadline", "is", "near"],
            wpm: 20,
            accuracy: 10
        };
    },

    getInitialState : function() {
        return {
            words: this.initWords(),
            currentWord: this.props.words[0],
            elapsed: 0
        };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: this.state.elapsed + 1});
    },

    initWords: function(){
        // TODO make status type enum ?
        var words = [];
        for (var i in this.props.words) {
            var word =  this.props.words[i];
            words.push({"id" : i, "content": word, "status": "pending", "letters": this.initLetters(word)});
        }
        words[0].status= "active";
        return words;
    },

    initLetters : function(word) {
        var letters = [];
        for (var i in word){
            letters.push({"id" : i, "content" : word[i], "status" : "pending"});
        }
        return letters;
    },

    updateWordStatus: function (status){
        var words = this.state.words;
        words[currentWordIndex].status = status;
        // move to next word
        currentWordIndex++;
        if(currentWordIndex < words.length) {
            words[currentWordIndex].status = "active";
            this.setState({words: words});
            this.setState({currentWord: words[currentWordIndex].content})
        } else {
            //TODO handle game over or give more words
        }
    },

    updateLetterStatus: function(status, index) {
        var words = this.state.words;
        words[currentWordIndex].letters[index].status = status;
        this.setState({words : words});
    },

    render: function () {
        return (
            <div className="gameComponents">
                <h1>Speed Typing</h1>
                <WordsContainer words={this.state.words} />
                <br/>
                <InputContainer currentWord={this.state.currentWord} updateWordStatus={this.updateWordStatus} updateLetterStatus={this.updateLetterStatus} />
                <br/>
                <Statistics elapsed={this.state.elapsed} words={this.state.words} />
            </div>
        );
    }

});

export default GameComponent;