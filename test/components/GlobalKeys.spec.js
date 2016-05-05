/**
 * Created by Kote on 5/5/2016.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GlobalKeys from '../../js/components/GlobalKeys';
import KeyPressListener from '../../js/components/KeyPressListener';

describe('GlobalKeys', () => {

    var buildGlobalKeys = ((handleKeyPress, gameStarted) => {
        return TestUtils.renderIntoDocument(
            <GlobalKeys handleKeyPress={handleKeyPress} gameStarted={gameStarted} />
        );
    });


});