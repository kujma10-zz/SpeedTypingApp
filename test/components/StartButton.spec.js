/**
 * Created by Kote on 4/21/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StartButton from '../../js/components/StartButton';
import R from 'ramda'
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
    onStartButtonClick: sinon.stub(),
    gameInProgress: false,
    wordsFetched: false
}

var buildStartButton = ((props) => {
    const element = React.createElement(StartButton, R.merge(defaultProps, props));
    return renderWithWrapperAndFind(element, 'start-button')
});

describe('StartButton', () => {

    it('hides start button when game is in progress', () => {
        let startButton = buildStartButton({gameInProgress: true}).childNodes[0];
        expect(startButton.hidden).to.eq(true);
    });

    it('disables start button when words are not fetched yet', () => {
        let startButton = buildStartButton().childNodes[0];
        expect(startButton.disabled).to.eq(true)
    });

    it('calls onStartButtonClick on click when words are fetched and game is not in progress', () => {
        let onStartButtonClick = sinon.stub()
        let button = buildStartButton({onStartButtonClick,gameInProgress: false, wordsFetched: true}).childNodes[0];
        TestUtils.Simulate.click(button)
        expect(onStartButtonClick).to.have.been.calledOnce
    });

});