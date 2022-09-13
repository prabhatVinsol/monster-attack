import React from 'react'
import Player from 'Component/Player'

function PlayerContainer(props) {
  return (
    <div className='PlayersContainer'  align='left'>
      <div className='PlayerContainerLeft' align='center'>
        <Player playerType='Player' playerHealth={props.playerHealth}/>
      </div>
      <div className='MonsterContainerRight' align='center'>
        <Player playerType='Monster' playerHealth={props.monsterHealth}/>
      </div> 
    </div>
  )
}

export default PlayerContainer