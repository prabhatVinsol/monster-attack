import React from 'react'
import Player from 'components/player'

function PlayerContainer({ userHealth, monsterHealth }) {
  return (
    <div className='PlayersContainer'  align='left'>
      <div className='PlayerContainerLeft' align='center'>
        <Player type='Player' health={userHealth}/>
      </div>
      <div className='MonsterContainerRight' align='center'>
        <Player type='Monster' health={monsterHealth}/>
      </div> 
    </div>
  )
}

export default PlayerContainer