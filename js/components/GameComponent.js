/**
 * Created by Kote on 4/5/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './Input';
import WordsContainer from './WordsContainer';
import Statistics from './StatisticsContainer'

var currentWordIndex = 0;
var GameComponent = React.createClass({

    getDefaultProps: function() {
        return {
            words: ["answer", "unfold", "exceptionally", "yourself", "dinners", "struck", "kitchen", "surroundings", "provided"],
            wpm: 20,
            accuracy: 10
        };
    },

    getInitialState : function() {
        return {
            words: this.initWords(),
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

    checkInput(input){
        var lastChar = input.substr(input.length - 1);
        var inputWords = input.split(" ");

        //TODO check backspace
        //TODO enum type status ?
        if(lastChar == ' '){
            var lastEnteredWord = inputWords[inputWords.length-2];
            if (lastEnteredWord == this.state.words[currentWordIndex].content){
                this.updateWordStatus("correct");
            } else {
                this.updateWordStatus("incorrect");
            }
        } else {
            var lastEnteredWord = inputWords[inputWords.length-1];
            var currentChar = this.state.words[currentWordIndex].content.substr(lastEnteredWord.length-1, 1);
            if(currentChar==lastChar){
                this.updateLetterStatus("correct", lastEnteredWord.length-1);
            } else {
                this.updateLetterStatus("incorrect", lastEnteredWord.length-1);
            }
        }
    },

    updateWordStatus: function (status){
        var words = this.state.words;
        words[currentWordIndex].status = status;
        // move to next word
        currentWordIndex++;
        words[currentWordIndex].status = "active";
        this.setState({words : words});
    },

    updateLetterStatus: function(status, index) {
        var words = this.state.words;
        words[currentWordIndex].letters[index].status = status;
        this.setState({words : words});
    },

    render: function () {
        return (
            <div className="gameComponents">
                <h1>Speed Typing app</h1>
                <WordsContainer words={this.state.words} />
                <br/>
                <InputBox checkInput={this.checkInput} />
                <br/>
                <Statistics elapsed={this.state.elapsed} words={this.state.words} />
            </div>
        );
    }

});

export default GameComponent;