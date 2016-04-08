/**
 * Created by Kote on 3/29/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var InputContainer = React.createClass({

    getInitialState: function() {
        return {input: ''};
    },

    handleInputText: function (e) {
        var input = e.target.value;
        this.setState({input: input});

        if(input != '') {
            var lastChar = input.substr(input.length - 1);
            if (lastChar == ' ') {
                var lastEnteredWord = input.trim();
                lastEnteredWord == this.props.currentWord ? this.props.updateWordStatus("correct") : this.props.updateWordStatus("incorrect");
                this.setState({input: ''});
            } else {
                // check correctness of each letter in word
                for(var i in this.props.currentWord){
                    if(i>=input.length)break;
                    var currentChar = this.props.currentWord[i];
                    currentChar == input[i] ? this.props.updateLetterStatus("correct", i) : this.props.updateLetterStatus("incorrect", i);
                }
            }
        }
    },

    render: function () {
        return (
            <div className="inputBox">
                <input autoFocus
                    type="text"
                    placeholder="Type words here"
                    value={this.state.input}
                    onChange={this.handleInputText}
                />
            </div>
        );
    }
})

export default InputContainer;
