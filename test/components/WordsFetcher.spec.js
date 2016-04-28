/**
 * Created by Kote on 4/21/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import R from 'ramda'
import WordFetcher from '../../js/components/WordsFetcher';
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
    onFetch: sinon.stub(),
    onCancel: sinon.stub(),
    inProgress: false,
    wordsFetched: false
}

var buildFetcher = ((props) => {
    const element = React.createElement(WordFetcher, R.merge(defaultProps, props));
    return renderWithWrapperAndFind(element, 'fetcher')
});

describe('WordFetcher', () => {

    context('when not in progress', () => {
        it('has button with fetch description', () => {
            let button = buildFetcher({inProgress: false}).childNodes[0];
            expect(button.tagName).to.eq('BUTTON');
            expect(button.textContent).to.eq('Fetch words');
        });

        it('calls onFetch when button clicked', () => {
            let onFetch = sinon.stub()
            let button = buildFetcher({onFetch, inProgress: false}).childNodes[0];
            TestUtils.Simulate.click(button)
            expect(onFetch).to.have.been.calledOnce
        });

        it('hides a cancel button', () => {
            let fetcher = buildFetcher({inProgress: false});
            let cancelButton = fetcher.querySelector(".cancel")
            expect(cancelButton.hidden).to.eq(true)
        })
    });

    context('when in progress', () => {

        it('does not call onFetch when button clicked', () => {
            let onFetch = sinon.stub()
            let button = buildFetcher({onFetch, inProgress: true}).childNodes[0];
            TestUtils.Simulate.click(button)
            expect(onFetch).not.to.have.been.called
        })

        it('shows a cancel button', () => {
            let fetcher = buildFetcher({inProgress: true});
            let cancelButton = fetcher.querySelector(".cancel")
            expect(cancelButton.disabled).to.eq(false)
        })

        it('calls onCancel when cancel button clicked', () => {
            let onCancel = sinon.stub()
            let fetcher = buildFetcher({inProgress: true, onCancel});
            let cancelButton = fetcher.querySelector(".cancel")
            TestUtils.Simulate.click(cancelButton)
            expect(onCancel).to.have.been.calledOnce
        })
    });

    context('when words are fetched', () => {

        it('hides a fetch button', () => {
            let fetcherButton = buildFetcher({wordsFetched: true}).childNodes[0];
            expect(fetcherButton.hidden).to.eq(true)
        })

        it('hides a cancel button', () => {
            let fetcher = buildFetcher({wordsFetched: true});
            let cancelButton = fetcher.querySelector(".cancel")
            expect(cancelButton.hidden).to.eq(true)
        })

    });

});