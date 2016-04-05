/**
 * Created by Kote on 3/15/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import GameComponent from './components/GameComponent'

ReactDOM.render(
    React.createElement(GameComponent, null),
    document.getElementById('content')
);

