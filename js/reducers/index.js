/**
 * Created by Kote on 4/13/2016.
 */
import { combineReducers } from 'redux'

const initialCurrentInput = '';
const initialPastInput = [];
const words = ["does", "short", "unit", "air", "our", "find", "war", "morning", "they"];
const startTime = Math.floor(Date.now() / 1000);

const initialState = {
    currentInput: initialCurrentInput,
    pastInput: initialPastInput,
    startTime: startTime,
    words: words
}

export const speedTyperReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_TO_NEXT_WORD':
            const pastInput = state.pastInput;
            const newPastInput = pastInput.concat(action.payload.trim());
            return {currentInput: "", pastInput: newPastInput, words: state.words, startTime: state.startTime};
        case 'UPDATE_CURRENT_INPUT':
            return {
                currentInput: action.payload,
                pastInput: state.pastInput,
                words: state.words,
                startTime: state.startTime
            }
        default:
            return state
    }
};

export function calculateWordsPerMinute(state) {
    let now = Math.floor(Date.now() / 1000)
    let minutesPassed = (now - state.startTime) / 60;
    return (state.pastInput.length / minutesPassed).toFixed(2);
}

export function calculateAccuracy(state) {
    let pastWordsForComparing = state.words.slice(0, state.pastInput.length);
    let matchingWords = 0;
    var that = this;
    pastWordsForComparing.forEach(function (element, index) {
        if (state.pastInput[index] == element) {
            matchingWords += 1;
        }
    });
    return (matchingWords / state.pastInput.length * 100).toFixed(0);
};
