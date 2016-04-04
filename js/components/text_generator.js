/**
 * Created by Kote on 3/30/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Word from './word'

var WordsContainer = React.createClass({

    propTypes: {
        words: React.PropTypes.array.isRequired
    },

    render: function () {
        return(
            <div className="words">
                {this.props.words.map((word) => { return <Word key={word} value={word} />; })}
            </div>
        );
    }
})

export default WordsContainer;
