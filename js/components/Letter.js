/**
 * Created by Kote on 4/6/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';


var Letter = React.createClass({

    propTypes: {
        value: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <span className={this.props.status}>
                {this.props.value}
            </span>
        );
    }
})

export default Letter;