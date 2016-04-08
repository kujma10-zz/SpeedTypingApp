/**
 * Created by Kote on 4/6/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedComponent from '../js/components/Speed';

describe('SpeedComponent', () => {

    var Wrapper = React.createClass({
        render: function() {
            return (
                <div>{this.props.children}</div>
            );
        }
    });

    var buildSpeedComponent = ((speed) => {
        let dom = TestUtils.renderIntoDocument(
            <Wrapper>
                <SpeedComponent value={speed}></SpeedComponent>
            </Wrapper>
        );

        return TestUtils.findRenderedDOMComponentWithClass(dom, "speed")
    });

    it('displays speed valuet', () => {
        let speed = buildSpeedComponent(2.45);
        let value = speed.childNodes[1]
        expect(value.textContent).to.eq('2.45');
    });

});

