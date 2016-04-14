import React from "react";
import ReactDOM from "react-dom";
import SpeedTyperContainer from "./containers/SpeedTyperContainer";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import speedTyperReducer from './reducers'
let store = createStore(speedTyperReducer)

ReactDOM.render(
    <Provider store={store}>
        <SpeedTyperContainer />
    </Provider>,
    document.getElementById('content')
);

store.subscribe(() => console.log(store.getState()) )

