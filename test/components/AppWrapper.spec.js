/**
 * Created by Kote on 5/5/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AppWrapper from '../../js/components/AppWrapper';
import WordsContainer from "../../js/containers/WordsContainer";
import {LinkToAbout, LinkToPastGames, LinkToPlay} from '../../js/components/AppWrapper';

describe('AppWrapper', () => {

    var buildAppWrapper = (() => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <AppWrapper />
        );
        return renderer.getRenderOutput();
    });

    it('renders link to play', () => {
        let appWrapper = buildAppWrapper();
        let linkToPlay = appWrapper.props.children[0]
        expect(linkToPlay.type).to.eq(LinkToPlay);
    });

    it('renders link to past games', () => {
        let appWrapper = buildAppWrapper();
        let linkToPastGames = appWrapper.props.children[2]
        expect(linkToPastGames.type).to.eq(LinkToPastGames);
    });

    it('renders link to about', () => {
        let appWrapper = buildAppWrapper();
        let linkToAbout = appWrapper.props.children[4]
        expect(linkToAbout.type).to.eq(LinkToAbout);
    });

});