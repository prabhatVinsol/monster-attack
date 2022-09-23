import React from 'react'

function ActionContainer({ monsterTurn, attack, specialAttack, heal, giveup, start, started, disableSpecialAttack }) {

  if (started) {
    return (
      <div className='actions-container'>
        <button type="button" className={monsterTurn ? 'button disbaled' :'button attack'} onClick={() => attack()}>Action</button>
        <button type="button" className={disableSpecialAttack || monsterTurn ? 'button disbaled' : 'button special-attack'} disabled={disableSpecialAttack} onClick={() => specialAttack()}>Special Attack</button>
        <button type="button" className={monsterTurn ? 'button disbaled' :'button heal'} onClick={() => heal()}>Heal</button>
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