/**
 * Created by Kote on 3/31/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';


var Word = React.createClass({

    propTypes: {
        value: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div className="word">
                {this.props.value}
            </div>
        );
    }
})

export default Word;