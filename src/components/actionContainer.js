import React from 'react'

function ActionContainer({ attack, heal, giveup, start, started }) {
  const handleAttack = () => {
    const randomNumber = Math.floor(Math.random() * (10)) + 1
    attack(randomNumber, false)
  }
  const handleSpecialAttack = () => {
    const randomNumber = Math.floor(Math.random() * (20)) + 10
    attack(randomNumber, true)
  }
  const handleHeal = () => {
    const randomNumber = Math.floor(Math.random() * (10)) + 1
    heal(randomNumber)
  }

  if (started) {
    return (
      <div className='ActionsContainer'>
        <button type="button" className='Button Attack' onClick={handleAttack}>Action</button>
        <button type="button" className='Button SpecialAttack' onClick={handleSpecialAttack}>Special Attack</button>
        <button type="button" className='Button Heal' onClick={handleHeal}>Heal</button>
        <button type="button" className='Button GiveUp' onClick={() => giveup()}>Give Up</button>
      </div>
    )
  } else {
    return (
      <div className='ActionsContainer'>
        <button className='Button Attack' onClick={() => start()}>Start</button>
      </div>
    )
  }
  
}

export default ActionContainer