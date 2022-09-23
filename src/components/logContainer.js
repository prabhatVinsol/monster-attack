import React from 'react'

function LogContainer({ moves }) {
  const renderMovesListing = moves.map((move, index) => <p key={index} className='log-text'>{move}</p>)
  return (
    <div className='action-log-container'>
        {renderMovesListing.length > 0 ? renderMovesListing : (<div className='no-log'>No Moves Yet</div>)}
    </div>
  )
}

export default LogContainer