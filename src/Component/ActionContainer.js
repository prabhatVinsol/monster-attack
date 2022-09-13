import React from 'react'

function ActionContainer(props) {
  const handleAttack = () => {
    const randomNumber = Math.floor(Math.random() * (10)) + 1
    props.attack(randomNumber, false)
  }
  const handleSpecialAttack = () => {
    const randomNumber = Math.floor(Math.random() * (20)) + 10
    props.attack(randomNumber, true)
  }
  const handleHeal = () => {
    const randomNumber = Math.floor(Math.random() * (10)) + 1
    props.heal(randomNumber)
  }
  const giveup = () => {
    props.giveup()
  }
  const start = () => {
    props.start()
  }
  if (props.started) {
    return (
      <div className='ActionsContainer'>
        <button className='Button Attack' onClick={handleAttack}>Action</button>
        <button className='Button SpecialAttack' onClick={handleSpecialAttack}>Special Attack</button>
        <button className='Button Heal' onClick={handleHeal}>Heal</button>
        <button className='Button GiveUp' onClick={giveup}>Give Up</button>
      </div>
    )
  } else {
    return (
      <div className='ActionsContainer'>
        <button className='Button Attack' onClick={start}>Start</button>
      </div>
    )
  }
  
}

export default ActionContainer