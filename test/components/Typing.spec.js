'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Typing from '../../js/components/Typing';

describe('Typing', () => {

    var Wrapper = React.createClass({
        render: function () {
            return (
                <div>{this.props.children}</div>
            );
        }
    });

    var buildTypingContainer = ((onUserInput, currentInput, gameInProgress) => {
        return TestUtils.renderIntoDocument(
            <Wrapper>
                <Typing onUserInput={onUserInput} currentInput={currentInput} gameInProgress={gameInProgress}/>
            </Wrapper>
        );
    });


    it('disables input when game is not in progress', () => {
        let onUserInput = sinon.stub();
        let typing = buildTypingContainer(onUserInput, "hello", false);
        let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');

        expect(textInput.disabled).to.eq(true)
    });

    it('sets the input field value', () => {
        let onUserInput = sinon.stub;
        let typing = buildTypingContainer(onUserInput, "hello", true);
        let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');
        expect(textInput.value).to.eq("hello");
    });

    it('calls onUserInput prop on change', () => {
        let onUserInput = sinon.stub();
        let typing = buildTypingContainer(onUserInput, "hello", true);
        let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');

        TestUtils.Simulate.change(textInput);

        expect(onUserInput).to.have.been.calledWith("hello");
    });
});
