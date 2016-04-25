/**
 * Created by Kote on 4/20/2016.
 */
import R from 'ramda'

const initialState = {
    currentInput: '',
    pastInput: [],
    words: [],
    gameInProgress: false,
    elapsed: 0,
    timerId: null,
    bestWordsPerMinute: 0,
    bestAccuracy: 0,
    wordsFetched: false
}

// to reset what is needed after 'start' click
const gameStartInitialState = {
    currentInput: '',
    pastInput: [],
    gameInProgress: true,
    elapsed: 0,
    wordsFetched: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_INPUT':
            const currentInput = action.payload.currentInput;
            if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " ") {
                const newPastInput = R.concat(state.pastInput, R.trim(currentInput));
                return R.merge(state, {currentInput: "", pastInput: newPastInput});
            } else {
                return R.merge(state, {currentInput: currentInput});
            }
        case 'START_GAME':
            return R.merge(gameStartInitialState,
                {
                    words: state.words,
                    timerId: action.payload.timerId,
                    bestWordsPerMinute: state.bestWordsPerMinute,
                    bestAccuracy: state.bestAccuracy
                });
        case 'STOP_GAME':
            let newState = R.merge(state, {gameInProgress: false, timerId: null});
            let wpm = calculateWordsPerMinute(state);
            if (wpm > state.bestWordsPerMinute) {
                newState = R.merge(newState, {bestWordsPerMinute: wpm});
            }
            let accuracy = calculateAccuracy(state);
            if (accuracy > state.bestAccuracy) {
                newState = R.merge(newState, {bestAccuracy: accuracy});
            }
            return newState;
        case 'TICK':
            return R.merge(state, {elapsed: state.elapsed + 1});
        case 'ADD_WORDS':
            return R.merge(state, {words: action.payload.words, wordsFetched: true});
        default:
            return state;
    }
}


export function calculateWordsPerMinute(state) {
    let wpm = state.pastInput.length / (state.elapsed / 60);
    return Math.round(wpm * 100) / 100;
}

export function calculateAccuracy(state) {
    let pastWordsForComparing = R.slice(0, state.pastInput.length, state.words);
    let countMatches = R.pipe(R.zipWith(R.equals), R.filter(R.identity), R.length);
    let accuracy = countMatches(pastWordsForComparing, state.pastInput) / state.pastInput.length * 100;
    return Math.round(accuracy);
};

export default reducer;
