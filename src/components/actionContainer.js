import React from 'react'
import { getRandomNumber } from 'utils/helper'

function ActionContainer({ attack, heal, giveup, start, started }) {
  const handleAttack = () => {
    const randomNumber = getRandomNumber(1, 10);
    attack(randomNumber, false)
  }

  const handleSpecialAttack = () => {
    const randomNumber = getRandomNumber(10, 20);
    attack(randomNumber, true)
  }
  
  const handleHeal = () => {
    const randomNumber = getRandomNumber(1, 10);
    heal(randomNumber)
  }

  if (started) {
    return (
      <div className='actions-container'>
        <button type="button" className='button attack' onClick={handleAttack}>Action</button>
        <button type="button" className='button specialAttack' onClick={handleSpecialAttack}>Special Attack</button>
        <button type="button" className='button heal' onClick={handleHeal}>Heal</button>
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