'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StopButton from '../../js/components/StopButton';
import R from 'ramda'
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
    onStopButtonClick: sinon.stub(),
    gameInProgress: false
}

var buildStopButton = ((props) => {
    const element = React.createElement(StopButton, R.merge(defaultProps, props));
    return renderWithWrapperAndFind(element, 'stop-button')
});

describe('StopButton', () => {

    it('hides stop button when game is in progress', () => {
        let stopButton = buildStopButton().childNodes[0];
        expect(stopButton.hidden).to.eq(true);
    });


    it('calls onStopButtonClick on click when game is in progress', () => {
        let onStopButtonClick = sinon.stub()
        let button = buildStopButton({onStopButtonClick, gameInProgress: true}).childNodes[0];
        TestUtils.Simulate.click(button)
        expect(onStopButtonClick).to.have.been.calledOnce
    });

});