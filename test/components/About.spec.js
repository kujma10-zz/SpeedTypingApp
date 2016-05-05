/**
 * Created by Kote on 5/5/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import About from '../../js/components/About';
import { wrap } from '../Wrapper'

describe('About', () => {

    var buildAbout = ()=> {
        let dom = wrap( <About  /> );
        return TestUtils.findRenderedDOMComponentWithClass(dom, "about")
    };

    it('renders about div and its children', () => {
        let about = buildAbout();
        expect(about.className).to.eq("about");
        let h3 = about.props.children[0]
        expect(h3.type).to.eq('h3')
        let span = about.props.children[1]
        expect(span.type).to.eq('span')
    });
});