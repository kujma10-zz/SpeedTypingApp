/**
 * Created by Kote on 4/21/2016.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Timer from '../../js/components/Timer';
import R from 'ramda'
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
    elapsed: 0,
}

var buildTimer = ((props) => {
    const element = React.createElement(Timer, R.merge(defaultProps, props));
    return renderWithWrapperAndFind(element, 'timer')
});

describe('Timer', () => {

    it('displays elapsed time', () => {
        let timer = buildTimer({elapsed: 10}).childNodes[1];
        expect(timer.textContent).to.eq("10");
    });


});