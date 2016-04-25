/**
 * Created by Kote on 4/20/2016.
 */
import R from 'ramda'

const initialState = {
    wordsFetchInProgress: false,
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'WORDS_FETCH_REQUESTED':
            return R.merge(state, {wordsFetchInProgress: true})
        case 'WORDS_FETCH_STOPPED':
            return R.merge(state, {wordsFetchInProgress: false})
        default:
            return state
    }
};

export default reducer;