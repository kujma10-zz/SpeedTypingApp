/**
 * Created by Kote on 3/31/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Letter from './Letter'

var Word = React.createClass({

    propTypes: {
        value: React.PropTypes.string.isRequired
    },

    render: function () {
            // TODO avoid if
            if(this.props.status == "active"){
                return (
                    <div className={this.props.status + " word"}>
                        {this.props.letters.map((letter) => {
                            return <Letter key={letter.id} value={letter.content} status={letter.status} />;
                        })}
                    </div>
                );
            } else {
                return (
                    <div className={this.props.status + " word"}>
                        {this.props.value}
                    </div>
                );
            }

    }
})

export default Word;