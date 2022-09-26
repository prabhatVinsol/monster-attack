import React from 'react'
import PlayerHealth from 'components/playerHealth'

function User({ type, health}) {
  return (
    <div className='User-type'>
      {type}
      <PlayerHealth health={health}/>
    </div>
  )
}

export default User