/**
 * Created by Kote on 4/28/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import RemoteSpeedTyper from '../../js/components/RemoteSpeedTyper';
import RemoteWordsContainer from "../../js/containers/RemoteWordsContainer";
import RemoteStatsContainer from "../../js/containers/RemoteStatsContainer";


describe('RemoteSpeedTyper', () => {

    var buildRemoteSpeedTyper = (() => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <RemoteSpeedTyper />
        );
        return renderer.getRenderOutput();
    });

    it('displays the header', () => {
        let speedTyper = buildRemoteSpeedTyper("green");
        let header = speedTyper.props.children[0];
        expect(header.type).to.eq('h1');
    });

    it('renders the remote stats container', () => {
        let speedTyper = buildRemoteSpeedTyper();
        let wordsBox = speedTyper.props.children[1];
        let statsContainer = wordsBox.props.children[0];
        expect(statsContainer.type).to.eq(RemoteStatsContainer);
    });

    it('renders the remote words container', () => {
        let speedTyper = buildRemoteSpeedTyper();
        let wordsBox = speedTyper.props.children[1];
        let wordsContainer = wordsBox.props.children[1]
        expect(wordsContainer.type).to.eq(RemoteWordsContainer);
    });


});