import React from 'react'

function LogContainer({ moves }) {
  const movesRenderComponents = moves.map((move, index) => <p key={index} className='log-text'>{move}</p>)
  return (
    <div className='action-log-container'>
        {movesRenderComponents.length > 0 ? movesRenderComponents : (<div className='no-log'>No Moves Yet</div>)}
    </div>
  )
}

export default LogContainer