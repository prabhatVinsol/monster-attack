import React from 'react'

function ActionContainer({ attack, specialAttack, heal, giveup, start, started }) {

  if (started) {
    return (
      <div className='actions-container'>
        <button type="button" className='button attack' onClick={() => attack()}>Action</button>
        <button type="button" className='button specialAttack' onClick={() => specialAttack()}>Special Attack</button>
        <button type="button" className='button heal' onClick={() => heal()}>Heal</button>
        <button type="button" className='button giveUp' onClick={() => giveup()}>Give Up</button>
      </div>
    )
  } else {
    return (
      <div className='actions-container'>
        <button className='button attack' onClick={() => start()}>Start</button>
      </div>
    )
  }
  
}

export default ActionContainer