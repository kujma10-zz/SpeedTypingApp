/**
 * Created by Kote on 4/7/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../js/components/Letter';
import Word from '../js/components/Word'

describe('WordComponent', () => {

    var buildWordComponent = ((content, status, letters) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Word value={content} status={status} letters={letters}> </Word>
        );
        let renderedTree = renderer.getRenderOutput();

        return renderedTree;
    });

    it('displays word content when status is pending', () => {
        let word = buildWordComponent('Test','pending', []);
        expect(word.props.children).to.eq('Test');
    });

    it('creates letters when status is active', () => {
        let mockLetters = [
            {id: 1, "content": "T", "status": "pending"},
            {id: 2, "content": "e", "status": "pending"}
        ]
        let letters = buildWordComponent('Te','active', mockLetters);
        expect(letters.props.children.length).to.eq(2)

        let first_letter = letters.props.children[0];
        expect(first_letter.type).to.eq(Letter);
        expect(first_letter.key).to.eq('1');
        expect(first_letter.props).to.eql({"value": "T", "status": "pending"});

        let second_letter = letters.props.children[1];
        expect(second_letter.type).to.eq(Letter);
        expect(second_letter.key).to.eq('2');
        expect(second_letter.props).to.eql({"value": "e", "status": "pending"});
    });

});