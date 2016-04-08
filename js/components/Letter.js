/**
 * Created by Kote on 4/6/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const Letter = (props) => {

    return (
        <span className={props.status + " letter"}>
            {props.value}
        </span>
    );

}

Letter.propTypes = {
    id: React.PropTypes.number.isRequired,
    value: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired
}

export default Letter;