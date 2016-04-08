/**
 * Created by Kote on 4/7/2016.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AccuracyComponent from '../js/components/Accuracy.js';

describe('AccuracyComponent', () => {

    var Wrapper = React.createClass({
        render: function() {
            return (
                <div>{this.props.children}</div>
            );
        }
    });

    var buildAccuracyComponent = ((accuracy) => {
        let dom = TestUtils.renderIntoDocument(
            <Wrapper>
                <AccuracyComponent value={accuracy}></AccuracyComponent>
            </Wrapper>
        );

        return TestUtils.findRenderedDOMComponentWithClass(dom, "accuracy")
    });

    it('displays accuracy value', () => {
        let speed = buildAccuracyComponent(100);
        let value = speed.childNodes[1]
        expect(value.textContent).to.eq('100');
    });

});

