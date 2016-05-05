import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import HighScoreContainer from "./js/containers/PastGamesContainer";
import SpeedTyper from "./js/components/SpeedTyper";
import AppWrapper from './js/components/AppWrapper'
import About from './js/components/About'

export default (history) => (_) => {
  return(
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={SpeedTyper} />
        <Route path="/play" component={SpeedTyper} />
        <Route path="/pastGames" component={HighScoreContainer} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  )
}
