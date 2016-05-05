'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../../js/components/SpeedTyper';
import WordsContainer from "../../js/containers/WordsContainer";
import StatsContainer from "../../js/containers/StatsContainer";
import RemoteContainer from "../../js/containers/RemoteContainer";
import GlobalKeysContainer from "../../js/containers/GlobalKeysContainer";
import StartButtonContainer from "../../js/containers/StartButtonContainer";

describe('SpeedTyper', () => {

  var buildSpeedTyper = (() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyper />
    );
    return renderer.getRenderOutput();
  });

  it('renders the stats container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0]
    let statsContainer = wordsBox.props.children[0]
    expect(statsContainer.type).to.eq(StatsContainer);
  });

  it('renders the words container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0]
    let wordsContainer = wordsBox.props.children[1]
    expect(wordsContainer.type).to.eq(WordsContainer);
  });


  it('renders the global keys container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0]
    let keysContainer = wordsBox.props.children[2]
    expect(keysContainer.type).to.eq(GlobalKeysContainer);
  });

  it('renders the remote container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0]
    let remote = wordsBox.props.children[3]
    expect(remote.type).to.eq(RemoteContainer);
  });

  it('renders the start button container', () => {
    let speedTyper = buildSpeedTyper("green");
    let start = speedTyper.props.children[1]
    expect(start.type).to.eq(StartButtonContainer);
  });

});
