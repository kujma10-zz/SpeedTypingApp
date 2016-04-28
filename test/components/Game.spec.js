/**
 * Created by Kote on 4/28/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Game from '../../js/components/Game';
import SpeedTyper from '../../js/components/SpeedTyper';
import RemoteSpeedTyper from '../../js/components/RemoteSpeedTyper';

describe('Game', () => {

    var buildGame = ((remoteGameInProgress) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Game remoteGameInProgress={remoteGameInProgress}/>
        );
        return renderer.getRenderOutput();
    });

    it('renders multi player game when remote player game is in progress', () => {
        let game = buildGame(true);
        expect(game.props.className).to.eq('multi-player');
        let speedtyper = game.props.children[0];
        let remoteSpeedtyper = game.props.children[1];
        expect(speedtyper.type).to.eq(SpeedTyper);
        expect(remoteSpeedtyper.type).to.eq(RemoteSpeedTyper);
        ;
    });

    it('renders single player game when remote player game is not in progress', () => {
        let game = buildGame(false);
        expect(game.props.className).to.eq('single-player');
    });
});