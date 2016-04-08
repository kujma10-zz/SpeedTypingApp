/**
 * Created by Kote on 3/31/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const SpeedComponent = (props) => {

    return (
        <div className="speed">
            Words per minute: {props.value}
        </div>
    );

}

SpeedComponent.propTypes = {
    value: React.PropTypes.number.isRequired
}

export {SpeedComponent as default};