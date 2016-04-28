import React from "react";
import ReactDOM from "react-dom";
import GameContainer from "./containers/GameContainer";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import speedTyperReducer from './reducers'
import { websocketConnectionRequested, sendWebsocketMessage } from './actions/Websocket';

let store = createStore(speedTyperReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('content')
);

let previousGame;
store.subscribe(() => {

    const newGame = store.getState().game

    if (previousGame !== newGame) {
        sendWebsocketMessage(store.getState().game)
    }

    previousGame = newGame;
})

// Immediately connected to websocket, this could also be done only when e.g a button is pushed
store.dispatch(websocketConnectionRequested())

