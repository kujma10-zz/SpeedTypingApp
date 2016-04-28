/**
 * Created by Kote on 4/21/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StartButton from '../../js/components/StartButton';
import R from 'ramda'
import {renderWithWrapperAndFindByTag} from '../Wrapper';

describe('StartButton', () => {


    it('disables start button when words are not fetched yet', () => {
        let button = renderWithWrapperAndFindByTag(
            <StartButton onStartButtonClick={sinon.stub()} onStopButtonClick={sinon.stub()} gameInProgress={false} wordsFetched={false} />,
            'button'
        )
        expect(button.disabled).to.eq(true)
    });

    it('displays start button if game not started', () => {
        let button = renderWithWrapperAndFindByTag(
            <StartButton onStartButtonClick={sinon.stub()} onStopButtonClick={sinon.stub()} gameInProgress={false} wordsFetched={true} />,
            'button'
        )
        expect(button.textContent).to.eq("Start");
    });

    it("calls onStartClick when start button clicked", () => {
        let onStartClick = sinon.stub();
        let onStopClick = sinon.stub();

        let button = renderWithWrapperAndFindByTag(
            <StartButton onStartButtonClick={onStartClick} onStopButtonClick={onStopClick} gameInProgress={false} wordsFetched={true} />,
            'button'
        )

        TestUtils.Simulate.click(button);

        expect(onStartClick).to.have.been.calledOnce;
        expect(onStopClick).to.not.have.been.called;
    })

    it('displays stop button if game is in progress', () => {
        let button = renderWithWrapperAndFindByTag(
            <StartButton onStartButtonClick={sinon.stub()} onStopButtonClick={sinon.stub()} gameInProgress={true} wordsFetched={true} />,
            'button'
        )
        expect(button.textContent).to.eq("Stop");
    });

    it('calls onStopClick when stop button clicked', () => {
        let onStartClick = sinon.stub();
        let onStopClick = sinon.stub();

        let button = renderWithWrapperAndFindByTag(
            <StartButton onStartButtonClick={onStartClick} onStopButtonClick={onStopClick} gameInProgress={true} wordsFetched={true} />,
            'button'
        )

        TestUtils.Simulate.click(button);

        expect(onStopClick).to.have.been.calledOnce;
        expect(onStartClick).to.not.have.been.called;
    })
});



