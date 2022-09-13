import React from 'react'

function LogContainer(props) {
  console.log('MOves', props.moves)
  const moves = props.moves.reverse().map((move, index) => <p key={index} className='Logtext'>{move}</p>)
  return (
    <div className='ActionLogContainer'>
        {moves.length > 0 ? moves : (<div className='Nolog'>No Moves Yet</div>)}
    </div>
  )
}

export default LogContainer