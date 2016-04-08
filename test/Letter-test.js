/**
 * Created by Kote on 4/7/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../js/components/Letter';

describe('LetterComponent', () => {

    var Wrapper = React.createClass({
        render: function() {
            return (
                <div>{this.props.children}</div>
            );
        }
    });

    var buildLetterComponent = ((letter, status) => {
        let dom = TestUtils.renderIntoDocument(
            <Wrapper>
                <Letter value={letter}> status={status}</Letter>
            </Wrapper>
        );

        return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
    });

    it('displays letter value', () => {
        let letter = buildLetterComponent('B', '');
        let value = letter.childNodes[0]
        expect(value.textContent).to.eq('B');
    });

    //it('sets correct class', () => {
    //    let letter = buildLetterComponent('B', 'correct');
    //
    //    expect(letter.className).to.eq('correct');
    //});

});