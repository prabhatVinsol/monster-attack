import React, {useState, useEffect} from 'react'
import PlayerContainer from 'Component/PlayerContainer'
import ActionContainer from 'Component/ActionContainer'
import LogContainer from 'Component/LogContainer'

function PlayersActionsContainer() {
  const [started, setStarted] = useState(false)
  const [playerhealth, setPlayerHealth] = useState(100)
  const [monsterhealth, setMonsterHealth] = useState(120)
  const [actionLog, setLog] = useState([])

  const attack = (health, isSpecialAttack) => {
    if (isSpecialAttack) {
      if(playerhealth >= 90) {
        updateLog('Player Special Attack')
        setMonsterHealth(getMonsterHealth(health))
      }
    } else {
      updateLog('Player Attack')
      setMonsterHealth(getMonsterHealth(health))
    }
  }

  const heal = (health) => {
    updateLog('Player Healed')
    const calHealth = Math.floor((playerhealth + ((playerhealth * (health/100)))))
    setPlayerHealth(calHealth > 100 ? 100 : calHealth)
  }

  const giveup = () => {
    updateLog('Player Giveup')
    setPlayerHealth(100)
    setMonsterHealth(120)
    setStarted(false)
  }

  const start = () => {
    setLog([])
    updateLog('Game Started')
    setStarted(true)
  }

  const getMonsterHealth = (healthPercentage) => (monsterhealth - ((healthPercentage * monsterhealth)/100)).toFixed(2)
  const updateLog = (logText) => setLog([...actionLog, logText])

  useEffect((prevState) => {
    const interval = setInterval(() => {
      if (started) {
         const randomNum = Math.floor(Math.random() * 20) + 1
        setPlayerHealth((playerhealth - (playerhealth * (randomNum/100))).toFixed(2))
        updateLog('Monster Attack')
      } else {
      }
    }, 2000);
    if(!started) {
      clearInterval(interval)
    }
    return (() => clearInterval(interval))
  }, [started, playerhealth, actionLog]) 
  
  
  return (
    <div className='PlayersActionContainer'>
      <PlayerContainer playerHealth={playerhealth} monsterHealth={monsterhealth}/>
      <ActionContainer attack={attack} heal={heal} giveup={giveup} start={start} started={started}/>
      <LogContainer moves={actionLog}/>
    </div>
  )
}

export default PlayersActionsContainer
