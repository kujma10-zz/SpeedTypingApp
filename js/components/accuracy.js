/**
 * Created by Kote on 3/31/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const AccuracyComponent = (props) => {

    return (
        <div className="accuracy">
            Accuracy: {props.value}%
        </div>
    );

}

AccuracyComponent.propTypes = {
    value: React.PropTypes.number.isRequired
}

export default AccuracyComponent;