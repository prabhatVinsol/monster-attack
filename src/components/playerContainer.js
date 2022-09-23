import React from 'react'
import User from 'components/player'

function PlayerContainer({ userHealth, monsterHealth }) {
  return (
    <div className='players-container'  align='left'>
      <div className='player-container-left' align='center'>
        <User type='Player' health={userHealth}/>
      </div>
      <div className='monster-container-right' align='center'>
        <User type='Monster' health={monsterHealth}/>
      </div> 
    </div>
  )
}

export default PlayerContainer