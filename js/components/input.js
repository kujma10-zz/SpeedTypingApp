/**
 * Created by Kote on 3/29/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var InputBox = React.createClass({

    handleInputText: function(e) {

    },

    render: function () {
        return (
            <div className="inputBox">
                <input
                    type="text"
                    placeholder="Type words here"
                    onChange={this.handleInputText}
                />
            </div>
        );
    }
})

export default InputBox;
