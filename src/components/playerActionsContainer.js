import React, {useState, useEffect} from 'react'
import PlayerContainer from 'components/playerContainer'
import ActionContainer from 'components/actionContainer'
import LogContainer from 'components/logContainer'
import { INITIAL_MONSTER_HEALTH, INITIAL_PLAYER_HEALTH } from 'utils/constants'

function PlayersActionsContainer() {
  const [started, setStarted] = useState(false)
  const [playerhealth, setPlayerHealth] = useState(INITIAL_PLAYER_HEALTH)
  const [monsterhealth, setMonsterHealth] = useState(INITIAL_MONSTER_HEALTH)
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

  const heal = (healthPercentage) => {
    updateLog('Player Healed')
    const healthToBeAdded = (playerhealth * (healthPercentage/100))
    const calHealth = Math.floor((playerhealth + Math.floor(healthToBeAdded.toFixed(2))))
    setPlayerHealth(calHealth > 100 ? 100 : calHealth)
  }

  const giveup = () => {
    updateLog('Player Giveup')
    setPlayerHealth(100)
    setMonsterHealth(120)
    setLog([])
    setStarted(false)
  }

  const start = () => {
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
      <PlayerContainer userHealth={playerhealth} monsterHealth={monsterhealth}/>
      <ActionContainer attack={attack} heal={heal} giveup={giveup} start={start} started={started}/>
      <LogContainer moves={actionLog}/>
    </div>
  )
}

export default PlayersActionsContainer
