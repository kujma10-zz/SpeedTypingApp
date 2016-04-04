/**
 * Created by Kote on 3/31/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SpeedComponent from  './speed'
import AccuracyComponent from './accuracy'


var Statistics = React.createClass({

    render: function () {
        return (
            <div className="statistics">
                <SpeedComponent value={this.props.wpm}/>
                <AccuracyComponent value={this.props.accuracy}/>
            </div>
        );
    }
})

export default Statistics;