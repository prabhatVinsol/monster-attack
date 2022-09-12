import React from 'react'
import Player from './Player'

function PlayerContainer() {
  return (
    <div className='PlayersContainer'  align='left'>
      {/*<Player playerType='Player' playerHealth='100'/>
      <Player playerType='Monster' playerHealth='120'/> */}
      <div className='PlayerContainerLeft' align='center'>
        <Player playerType='Player' playerHealth='100'/>
      </div>
      <div className='MonsterContainerRight' align='center'>
        <Player playerType='Monster' playerHealth='120'/>
      </div> 
    </div>
  )
}

export default PlayerContainer