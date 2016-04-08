/**
 * Created by Kote on 3/31/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Letter from './Letter'

var Word = (props) => {

    if (props.status == "active") {
        return (
            <div className={props.status + " word"}>
                {props.letters.map((letter) => {
                    return <Letter key={letter.id} value={letter.content} status={letter.status}/>;
                })}
            </div>
        );
    } else {
        return (
            <div className={props.status + " word"}>
                {props.value}
            </div>
        );
    }

}

Word.propTypes = {
    id: React.PropTypes.number.isRequired,
    value: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    letters: React.PropTypes.array.isRequired
}

export default Word;