/**
 * Created by Kote on 4/13/2016.
 */
import { combineReducers } from 'redux'

import gameReducer from './SpeedTyperReducer'
import wordsFetchReducer from './WordsFetchReducer'
import websocketReducer from './WebsocketReducer'

const reducer = combineReducers({
    game: gameReducer,
    fetching: wordsFetchReducer,
    websocket: websocketReducer
})

export default reducer;
