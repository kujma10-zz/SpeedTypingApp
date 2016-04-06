/**
 * Created by Kote on 3/29/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var InputBox = React.createClass({

    getInitialState: function() {
        return {input: ''};
    },

    handleInputText: function (e) {
        this.setState({input: e.target.value});

        var key = e.keyCode || e.charCode;

        if( key == 8){
            console.log("asdsa")
        }
        this.props.checkInput(e.target.value);
    },

    render: function () {
        return (
            <div className="inputBox">
                <input autoFocus
                    type="text"
                    placeholder="Type words here"
                    value={this.state.input}
                    onChange={this.handleInputText}
                />
            </div>
        );
    }
})

export default InputBox;
