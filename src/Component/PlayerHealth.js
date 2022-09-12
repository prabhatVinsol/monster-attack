import React from 'react'

function PlayerHealth(props) {
  return (
    <div className='PlayerHealth'>
      {props.health}
    </div>
  )
}

export default PlayerHealth