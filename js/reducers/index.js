/**
 * Created by Kote on 4/13/2016.
 */
import { combineReducers } from 'redux'

const initialCurrentInput = '';
const initialPastInput = [];
const words = ["does", "short", "unit", "air", "our", "find", "war", "morning", "they"];
const startTime = Math.floor(Date.now() / 1000);
const gameInProgress = false;

const initialState = {
    currentInput: initialCurrentInput,
    pastInput: initialPastInput,
    startTime: startTime,
    words: words,
    gameInProgress: gameInProgress
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const speedTyperReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_INPUT':
            const currentInput = action.payload.currentInput;
            if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " ") {
                const newPastInput = state.pastInput.concat(currentInput.trim());
                return merge(state, {currentInput: "", pastInput: newPastInput});
            } else {
                return merge(state, {currentInput: currentInput});
            }
        case 'START_GAME':
            return merge(state, {gameInProgress: true});
        case 'STOP_GAME':
            return merge(state, {gameInProgress: false});
        default:
            return state;
    }
}


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

export default speedTyperReducer;