import React from 'react';
import Words from "./../components/Words";
import Word from "./../components/Word";
import Letter from "./../components/Letter";
import { connect } from 'react-redux'

const WordsContainer = (props) => {

    return (
        <Words>
            {props.builtWords}
        </Words>
    );

};

const mapStateToProps = (state) => {
    return {
        builtWords: buildWords(state)
    }
}

function buildWords(state) {
    let childNodes = [];
    state.words.forEach((word, index) => {
        let letters = word;
        let color = "none";
        if (index === state.pastInput.length) {
            letters = buildLetters(state, word);
        } else if (index < state.pastInput.length) {
            color = (state.pastInput[index] === word ? "green" : "red" )
        }
        childNodes.push(<Word color={color} key={word} >{letters}</Word>)
    });
    return childNodes;
};

function buildLetters(state, word) {
    let letters = [];
    for(var i = 0; i < word.length; i++) {
        let letter = word[i]
        let color = "none"
        if (i < state.currentInput.length){
            color = (state.currentInput[i] == letter ? "green" : "red")
        }
        letters.push(<Letter key={i} color={color}>{letter}</Letter>)
    };
    return letters;
};

export default connect(
    mapStateToProps
)(WordsContainer)

WordsContainer.propTypes =  {
    builtWords: React.PropTypes.array.isRequired
};
