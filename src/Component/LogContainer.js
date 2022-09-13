import React from 'react'

function LogContainer(props) {
  const moves = props.moves.map((move, index) => <p key={index} className='Logtext'>{move}</p>)
  console.log(moves.length)
  return (
    <div className='ActionLogContainer'>
        {moves.length > 0 ? moves : (<div className='Nolog'>No Moves Yet</div>)}
    </div>
  )
}

export default LogContainer