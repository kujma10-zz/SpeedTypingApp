'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../../js/components/SpeedTyper';
import WordsContainer from "../../js/containers/WordsContainer";
import TypingContainer from "../../js/containers/TypingContainer";
import StatsContainer from "../../js/containers/StatsContainer";
import TimerContainer from "../../js/containers/TimerContainer";
import StartButtonContainer from "../../js/containers/StartButtonContainer";
import WordsFetcherContainer from "../../js/containers/WordsFetcherContainer";

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
    let wordsBox = speedTyper.props.children[0];
    let statsContainer = wordsBox.props.children[0];
    expect(statsContainer.type).to.eq(StatsContainer);
  });

  it('renders the timer container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0];
    let timerContainer = wordsBox.props.children[1]
    expect(timerContainer.type).to.eq(TimerContainer);
  });

  it('renders the words container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0];
    let wordsContainer = wordsBox.props.children[2]
    expect(wordsContainer.type).to.eq(WordsContainer);
  });

  it('renders the typing container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children[0];
    let typingContainer = wordsBox.props.children[3];
    expect(typingContainer.type).to.eq(TypingContainer);
  });

  it('renders the start button container', () => {
    let speedTyper = buildSpeedTyper("green");
    let startButtonContainer = speedTyper.props.children[1];
    expect(startButtonContainer.type).to.eq(StartButtonContainer);
  });

  it('renders the words fetcher container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsFetcherContainer = speedTyper.props.children[2];
    expect(wordsFetcherContainer.type).to.eq(WordsFetcherContainer);
  });
});
