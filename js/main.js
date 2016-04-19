import React from "react";
import ReactDOM from "react-dom";
import SpeedTyper from "./components/SpeedTyper";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import speedTyperReducer from './reducers'
let store = createStore(speedTyperReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <SpeedTyper />
    </Provider>,
    document.getElementById('content')
);

store.subscribe(() => console.log(store.getState()))


