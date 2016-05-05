'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { PastGamesContainer } from '../../js/containers/PastGamesContainer';

describe('PastGamesContainer', () => {

  var buildSpeedTyper = ((pastGames) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <PastGamesContainer pastGames={pastGames} />
    );
    return renderer.getRenderOutput();
  });

  it('renders the PastGamesContainer container', () => {
    const pastGames = [{
      words: ["a", "b"],
      pastInput: ["a", "c"],
      startTime: 0,
      endTime: 60
    }]
    let pastGamesContainers = buildSpeedTyper(pastGames);

    let pastGamesContainer = pastGamesContainers.props.children[0]
    expect(pastGamesContainer.key).to.eq('0');
    expect(pastGamesContainer.props.accuracy).to.eq('50');
    expect(pastGamesContainer.props.wordsPerMinute).to.eq('2.00');
    expect(pastGamesContainer.props.timeElapsed).to.eq('60');
  });
});
