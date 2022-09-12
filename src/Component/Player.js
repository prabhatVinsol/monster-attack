import React from 'react'
import PlayerHealth from './PlayerHealth'

function Player(props) {
  return (
    <div className='PlayerType'>
      {props.playerType}
      <PlayerHealth health={props.playerHealth}/>
    </div>
  )
}

export default Player