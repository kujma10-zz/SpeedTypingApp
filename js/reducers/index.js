/**
 * Created by Kote on 4/13/2016.
 */
import { combineReducers } from 'redux'

import gameReducer from './SpeedTyperReducer'
import wordsFetchReducer from './WordsFetchReducer'
import websocketReducer from './WebsocketReducer'
import remoteReducer from './RemoteReducer'

const reducer = combineReducers({
    game: gameReducer,
    fetching: wordsFetchReducer,
    websocket: websocketReducer,
    remote: remoteReducer
})

export default reducer;
