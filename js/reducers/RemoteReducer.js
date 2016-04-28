import R from 'ramda'

const initialState = {
    game: {
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
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVED_REMOTE_PLAYER_GAME':
            return R.merge(state, {game: action.payload.game})
        default:
            return state
    }
};

export default reducer;
