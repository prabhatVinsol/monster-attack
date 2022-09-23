import React from 'react'
import PlayerHealth from 'components/playerHealth'

function Player({ type, health}) {
  return (
    <div className='PlayerType'>
      {type}
      <PlayerHealth health={health}/>
    </div>
  )
}

export default Player