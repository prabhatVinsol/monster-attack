import React, {useState, useEffect} from 'react'
import PlayerContainer from 'components/playerContainer'
import ActionContainer from 'components/actionContainer'
import LogContainer from 'components/logContainer'
import { INITIAL_MONSTER_HEALTH, INITIAL_PLAYER_HEALTH } from 'utils/constants'
import { getHealedPlayerHealth, getNewHealthVal, getRandomNumber } from 'utils/helper'

function PlayersActionsContainer() {
  const [started, setStarted] = useState(false)
  const [playerhealth, setPlayerHealth] = useState(INITIAL_PLAYER_HEALTH)
  const [monsterhealth, setMonsterHealth] = useState(INITIAL_MONSTER_HEALTH)
  const [actionLog, setLog] = useState([])

  const attack = (healthPercentage, isSpecialAttack) => {
    if (isSpecialAttack) {
      if(playerhealth >= 90) {
        updateLog('Player Special Attack')
        setMonsterHealth(getNewHealthVal(monsterhealth, healthPercentage))
      }
    } else {
      updateLog('Player Attack')
      setMonsterHealth(getNewHealthVal(monsterhealth, healthPercentage))
    }
  }

  const heal = (healPercentage) => {
    updateLog('Player Healed')
    setPlayerHealth(getHealedPlayerHealth(playerhealth, healPercentage))
  }

  const giveup = () => {
    setPlayerHealth(100)
    setMonsterHealth(120)
    setLog([])
    setStarted(false)
  }

  const start = () => {
    updateLog('Game Started')
    setStarted(true)
  }

  const updateLog = (logText) => setLog([...actionLog, logText])

  useEffect((prevState) => {
    const interval = setInterval(() => {
      if (started) {
        const randomNum = getRandomNumber(1, 20);
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
    <div className='players-action-container'>
      <PlayerContainer userHealth={playerhealth} monsterHealth={monsterhealth}/>
      <ActionContainer attack={attack} heal={heal} giveup={giveup} start={start} started={started}/>
      <LogContainer moves={actionLog}/>
    </div>
  )
}

export default PlayersActionsContainer
