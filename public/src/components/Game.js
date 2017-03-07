import React from 'react';
import styles from '../styles/main.css';

const Game = ({game, selected}) => {
  console.log(game.video_thumbnails.thumbnail[0].content)
  return <div className={selected ? styles.selected_game_thumb : styles.game_thumb}>
    <div>{game.away_team_name + ' vs. ' + game.home_team_name}</div>
    <div>{game.time + ' ' + game.time_zone}</div>
    <div>{game.venue}</div>
    <div>{game.location}</div>
    <img src={game.video_thumbnails.thumbnail[0].content} />
  </div>
}

export default Game;
