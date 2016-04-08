'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StatisticsContainer from '../js/components/StatisticsContainer';
import SpeedComponent from '../js/components/Speed';
import AccuracyComponent from '../js/components/Accuracy'

// Pure functions need to be mocked to return some DOM
// We give it a classname to test that it is rendered
//CommentBox.mockImplementation(() => <div />)

describe('StatisticsContainer', (words) => {

    // mocked words array with one correct, one incorrect and one active word
    const mockWords= [{"id": 1, "content": "example", "status": "correct"}, {"id": 2, "content": "example2", "status": "incorrect"},  {"id": 3, "content": "example3", "status": "active"}];

    var buildStatisticsContainer = ((elapsed, words) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <StatisticsContainer elapsed={elapsed} words={words} />
        );
        let renderedTree = renderer.getRenderOutput();

        return renderedTree;
    });

    it('creates Speed component', () => {
        let statistics = buildStatisticsContainer(10, []);
        let speedComponent = statistics.props.children[0];

        expect(speedComponent.type).to.eq(SpeedComponent);
    });

    it('calculates correct Speed value', () => {
        let statistics = buildStatisticsContainer(2, mockWords);
        let speedComponent = statistics.props.children[0];

        expect(speedComponent.props.value).to.eq(60);
    });

    it('creates Accuracy component', () => {
        let statistics = buildStatisticsContainer(10, []);
        let accuracy = statistics.props.children[1];

        expect(accuracy.type).to.eq(AccuracyComponent);
    });

    it('calculates correct Accuracy value', () => {
        let statistics = buildStatisticsContainer(0, mockWords);
        let accuracyComponent = statistics.props.children[1];

        expect(accuracyComponent.props.value).to.eq(50);
    });

});

