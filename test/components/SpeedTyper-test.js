'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../../js/components/SpeedTyper';
import WordsContainer from "../../js/containers/WordsContainer";
import TypingContainer from "../../js/containers/TypingContainer";
import StatsContainer from "../../js/containers/StatsContainer";

describe('SpeedTyper', () => {

  var currentInput="current"
  var onUserInput=function(){}

  var buildSpeedTyper = ((children) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyper
        currentInput={currentInput}
        onUserInput={onUserInput}
      />
    );
    return renderer.getRenderOutput();
  });

  it('renders the stats container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children
    let statsContainer = wordsBox.props.children[0]
    expect(statsContainer.type).to.equal(StatsContainer);
  });

  it('renders the words container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children
    let wordsContainer = wordsBox.props.children[1]
    expect(wordsContainer.type).to.equal(WordsContainer);
  });

  it('renders the typing container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children
    let typingContainer = wordsBox.props.children[2]
    expect(typingContainer.type).to.equal(TypingContainer);
    expect(typingContainer.props).to.eql({
      currentInput: currentInput,
      onUserInput: onUserInput
    });
  });
});
