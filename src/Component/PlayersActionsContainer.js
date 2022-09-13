import React from 'react'
import PlayerContainer from 'Component/PlayerContainer'
import ActionContainer from 'Component/ActionContainer'
import LogContainer from 'Component/LogContainer'

function PlayersActionsContainer() {
  return (
    <div className='PlayersActionContainer'>
      <PlayerContainer />
      <ActionContainer />
      <LogContainer moves={[]}/>
    </div>
  )
}

export default PlayersActionsContainer