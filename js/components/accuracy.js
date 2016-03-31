/**
 * Created by Kote on 3/31/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var AccuracyComponent = React.createClass({

    render: function () {
        return (
            <div className="accuracy">
                Accuracy: {this.props.value}
            </div>
        );
    }
})

export default AccuracyComponent;