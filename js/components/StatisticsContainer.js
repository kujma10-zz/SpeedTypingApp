/**
 * Created by Kote on 3/31/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SpeedComponent from  './Speed'
import AccuracyComponent from './Accuracy'


var Statistics = React.createClass({

    propTypes: {
        words: React.PropTypes.array.isRequired
    },


    calculateSpeed : function(){
        var completedWords = 0;
        for(var i in this.props.words){
            if(this.props.words[i].status == "active")break;
            completedWords++;
        }
        var wpm = this.props.elapsed == 0 ? 0 : (completedWords / (this.props.elapsed / 60));
        return Math.round(wpm * 100) / 100;
    },

    calculateAccuracy : function(){
        var completedWords = 0, correctWords = 0;
        for(var i in this.props.words){
            if(this.props.words[i].status == "correct")correctWords++;
            if(this.props.words[i].status == "active")break;
            completedWords++;
        }
        var accuracy = completedWords == 0 ? 0 : 100*(correctWords / completedWords)
        return Math.round(accuracy * 100) / 100;;
    },

    render: function () {
        return (
            <div className="statistics">
                <SpeedComponent value={this.calculateSpeed()}/>
                <AccuracyComponent value={this.calculateAccuracy()}/>
            </div>
        );
    }
})

export default Statistics;