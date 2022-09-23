import React from 'react'

function LogContainer({ moves }) {
  const movesRenderComponents = moves.map((move, index) => <p key={index} className='Logtext'>{move}</p>)
  return (
    <div className='ActionLogContainer'>
        {movesRenderComponents.length > 0 ? movesRenderComponents : (<div className='Nolog'>No Moves Yet</div>)}
    </div>
  )
}

export default LogContainer