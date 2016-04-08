/**
 * Created by Kote on 4/7/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WordsContainer from '../js/components/WordsContainer'
import Word from '../js/components/Word'

describe('WordsContainer', () => {

    var buildWordsContainerComponent = ((words) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <WordsContainer words={words}> </WordsContainer>
        );
        let renderedTree = renderer.getRenderOutput();

        return renderedTree;
    });

    it('creates the correct words', () => {
        let mockWords = [
            {id: 1, "content": "Test1", "status": "active", letters:[]},
            {id: 2, "content": "T", "status": "pending", letters:[{"content":"T"}]}
        ]
        let words = buildWordsContainerComponent(mockWords);
        expect(words.props.children.length).to.eq(2)

        let first_word = words.props.children[0];
        expect(first_word.type).to.eq(Word);
        expect(first_word.key).to.eq('1');
        expect(first_word.props).to.eql({"value": "Test1", "status": "active", letters:[]});

        let second_word = words.props.children[1];
        expect(second_word.type).to.eq(Word);
        expect(second_word.key).to.eq('2');
        expect(second_word.props).to.eql({"value": "T", "status": "pending", letters:[{"content":"T"}]});
    });

});