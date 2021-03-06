import React from 'react';
import EditPlayer from '../EditPlayer/EditPlayer';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player_name">
      <EditPlayer value={props.name} onPlayerUpdate={(playerNewName) => props.onPlayerUpdate(playerNewName)} />
    </span>
    <span className="Player_score">{props.score}</span>
    <span className="Player_button plus_button" onClick={() => props.onPlayerScoreChange(1)} >+</span>
    <span className="Player_button minus_button" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
    <span className="Remove_button" onClick={() => props.onPlayerRemove()}>x</span>
  </li>
)


export default Player;
