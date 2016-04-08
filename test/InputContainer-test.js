/**
 * Created by Kote on 4/7/2016.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputContainer from '../js/components/InputContainer';

describe('InputContainer', () => {
    var buildInputContainer = ((currentWord, updateWordStatus, updateLetterStatus) => {
        return TestUtils.renderIntoDocument(
            <InputContainer currentWord={currentWord} updateWordStatus={updateWordStatus} updateLetterStatus={updateLetterStatus} />
        );
    });

    it('creates the input node', () => {
        let input = buildInputContainer("bla", ()=>{}, ()=>{});
        var inputs = TestUtils.scryRenderedDOMComponentsWithTag(input, 'input');
        let inputField = inputs[0];

        expect(inputField.tagName).to.equal("INPUT");
        expect(inputField.type).to.equal("text");

    });

    it('changes the state if name input changes', () => {
        let input = buildInputContainer("bla", ()=>{}, ()=>{});
        var inputField = TestUtils.scryRenderedDOMComponentsWithTag(input, 'input')[0];

        inputField.value = "Blabla"
        TestUtils.Simulate.change(inputField); // Simulate change event

        expect(input.state.input).to.equal("Blabla");
    });

    it('calls updateWordStatus with correct result if space is entered', () => {
        let updateWordStatus = sinon.stub();
        let input = buildInputContainer("Bla", updateWordStatus, ()=>{});

        var inputField = TestUtils.scryRenderedDOMComponentsWithTag(input, 'input')[0];

        inputField.value = "Bla "
        TestUtils.Simulate.change(inputField);

        expect(updateWordStatus).to.have.been.calledWith("correct");
    });

    it('calls updateWordStatus with incorrect result if space is entered', () => {
        let updateWordStatus = sinon.stub();
        let input = buildInputContainer("Bla", updateWordStatus, ()=>{});

        var inputField = TestUtils.scryRenderedDOMComponentsWithTag(input, 'input')[0];

        inputField.value = "SomeOtherWord "
        TestUtils.Simulate.change(inputField);

        expect(updateWordStatus).to.have.been.calledWith("incorrect");
    });

    it('calls updateLetterStatus with incorrect result if incorrect letter is entered', () => {
        let updateLetterStatus = sinon.stub();
        let input = buildInputContainer("a", ()=>{}, updateLetterStatus);

        var inputField = TestUtils.scryRenderedDOMComponentsWithTag(input, 'input')[0];

        inputField.value = "b"
        TestUtils.Simulate.change(inputField);

        expect(updateLetterStatus).to.have.been.calledWith("incorrect");
    });

    it('calls updateLetterStatus with correct result if correct letter is entered', () => {
        let updateLetterStatus = sinon.stub();
        let input = buildInputContainer("a", ()=>{}, updateLetterStatus);

        var inputField = TestUtils.scryRenderedDOMComponentsWithTag(input, 'input')[0];

        inputField.value = "a"
        TestUtils.Simulate.change(inputField);

        expect(updateLetterStatus).to.have.been.calledWith("correct");
    });



});

