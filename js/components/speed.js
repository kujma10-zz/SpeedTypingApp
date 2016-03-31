/**
 * Created by Kote on 3/31/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var SpeedComponent = React.createClass({

    render: function () {
        return (

            <div className="speed">
                Words per minute: {this.props.value}
            </div>
        );
    }
})

export default SpeedComponent;