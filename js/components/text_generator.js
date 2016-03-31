/**
 * Created by Kote on 3/30/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Word from  './word.js'

var data = ['Who\'s there? Nay, answer me: stand, and unfold yourself. Long live the king! Bernardo? You come most carefully upon your hour. Tis now struck twelve; get thee to bed, Francisco.',
    'On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge. ' +
    'He had successfully avoided meeting his landlady on the staircase. His garret was under the roof of a high, five-storied house, and was more like a cupboard than a room. The landlady, who provided him with garret, dinners, and attendance, lived on the floor below, and every time he went out he was obliged to pass her kitchen, the door of which invariably stood open. And each time he passed, the young man had a sick, frightened feeling, which made him scowl and feel ashamed. He was hopelessly in debt to his landlady, and was afraid of meeting her.',
    'With a sinking heart and a nervous tremor, he went up to a huge house which on one side looked on to the canal, and on the other into the street. This house was let out in tiny tenements and was inhabited by working people of all kinds—tailors, locksmiths, cooks, Germans of sorts, girls picking up a living as best they could, petty clerks, &c. There was a continual coming and going through the two gates and in the two courtyards of the house. Three or four door-keepers were employed on the building. The young man was very glad to meet none of them, and at once slipped unnoticed through the door on the right, and up the staircase. It was a back staircase, dark and narrow, but he was familiar with it already, and knew his way, and he liked all these surroundings: in such darkness even the most inquisitive eyes were not to be dreaded.'];


var WordsContainer = React.createClass({

    render: function () {
        var rand = data[Math.floor(Math.random() * data.length)];
        return (
            <div className="wordsContainer">
                <Word content={rand} />
            </div>
        );
    }
})

export default WordsContainer;
