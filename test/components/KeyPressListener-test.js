'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import KeyPressListener from '../../js/components/KeyPressListener';

describe('KeyPressListener', () => {
  var buildKeyPressListener = ((handleKeyPress, gameStarted) => {
    return TestUtils.renderIntoDocument(
        <KeyPressListener handleKeyPress={handleKeyPress} gameStarted={gameStarted} />
    );
  });

  it('calls handleKeyPress with the key string when keypress triggered on window and game is in progress', () => {
    let handleKeyPress = sinon.stub()
    let keyPressListener = buildKeyPressListener(handleKeyPress, true);

    var event = new window.KeyboardEvent('keypress', {keyCode: 69})
    window.dispatchEvent(event)
    expect(handleKeyPress).to.have.been.calledWith("E")
  });

  it('does not call handleKeyPress when game is in not progress', () => {
    let handleKeyPress = sinon.stub()
    let keyPressListener = buildKeyPressListener(handleKeyPress, false);

    var event = new window.KeyboardEvent('keypress', {keyCode: 69})
    window.dispatchEvent(event)
    expect(handleKeyPress).to.not.have.been.calledWith("E")
  });

});
