import React from "react";
import { Link } from 'react-router';

export const LinkToPlay = (_) => <Link to="/play">Play</Link>
export const LinkToPastGames = (_) => <Link to="/pastGames">Past games</Link>
export const LinkToAbout = (_) => <Link to="/about">About</Link>

export default (props) => {
  return(
    <div className="speedTypingApp">
      <LinkToPlay/> <LinkToPastGames/> <LinkToAbout/>
      {props.children}
    </div>
  )
}
