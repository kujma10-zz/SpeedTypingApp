import R from 'ramda'

const initialState = {
    game: {
        pastInput: [],
        words: [],
        gameInProgress: false,
        bestWordsPerMinute: 0,
        bestAccuracy: 0,
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
