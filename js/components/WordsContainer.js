/**
 * Created by Kote on 3/30/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Word from './Word'

const WordsContainer = (props) => {

    return (
        <div className="words">
            {props.words.map((word) => {
                return <Word key={word.id} value={word.content} status={word.status} letters={word.letters}/>;
            })}
        </div>
    );

}

WordsContainer.propTypes = {
    words: React.PropTypes.array.isRequired
}

export default WordsContainer;
