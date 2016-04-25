/**
 * Created by Kote on 4/13/2016.
 */
import { combineReducers } from 'redux'

import gameReducer from './SpeedTyperReducer'
import wordsFetchReducer from './WordsFetchReducer'

const reducer = combineReducers({
    game: gameReducer,
    fetching: wordsFetchReducer
})

export default reducer;
