/**
 * Created by Kote on 3/31/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var Word = React.createClass({

    propTypes: {
        content: React.PropTypes.string.isRequired
    },

    render: function () {
        return (

            <div className="word">
                {this.props.content}
            </div>
        );
    }
})

export default Word;
