/**
 * Created by Kote on 4/7/2016.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GameComponent from '../js/components/GameComponent';
import Statistics from '../js/components/StatisticsContainer';
import WordsContainer from '../js/components/WordsContainer';
import InputContainer from '../js/components/InputContainer';

describe('GameComponent', () => {
    var buildGameComponent = (() => {
        return TestUtils.renderIntoDocument(
            <GameComponent />
        );
    });

    context('when words array is updated', () => {
        it('moves to the next word (word becomes active) and marks previous as correct one', () => {
            let game = buildGameComponent();

            game.updateWordStatus("correct");

            let words = game.state.words;

            expect(words[0]).to.have.property('status', 'correct');
            expect(words[1]).to.have.property('status', 'active');
        });

        it('moves to the next word (word becomes active) and marks previous as incorrect one', () => {
            let game = buildGameComponent();

            game.updateWordStatus("incorrect");

            let words = game.state.words;

            expect(words[1]).to.have.property('status', 'incorrect');
        });
    });


    context('when letters array is updated', () => {
        it('moves to the next letter  and marks as correct one', () => {
            let game = buildGameComponent();

            game.updateLetterStatus("correct", 0);

            let words = game.state.words;

            expect(words[2].letters[0]).to.have.property('status', 'correct');
            expect(words[2].letters[1]).to.have.property('status', 'pending');
        });

        it('moves to the next letter  and marks as incorrect one', () => {
            let game = buildGameComponent();

            game.updateLetterStatus("incorrect", 0);

            let words = game.state.words;

            expect(words[2].letters[0]).to.have.property('status', 'incorrect');
        });

    });

    //it('renders Input Container ', () => {
    //    let renderer = TestUtils.createRenderer();
    //    renderer.render(<InputContainer/>)
    //    let output = renderer.getRenderOutput();
    //
    //    expect(output.props.children).to.eq(InputContainer);
    //    expect(output.props).to.have.property('currentWord')
    //        .which.eql("")
    //    expect(output.props).to.have.property('updateWordStatus')
    //        .which.is.a('function')
    //});
});

