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

  const attack = () => {
    updateLog('Player Attack');
    const healthPercentage = getRandomNumber(1, 10);
    setMonsterHealth(getNewHealthVal(monsterhealth, healthPercentage));
  }

  const specialAttack = () => {
    updateLog('Player Special Attack');
    const healthPercentage = getRandomNumber(10, 20);
    setMonsterHealth(getNewHealthVal(monsterhealth, healthPercentage))
  }

  const heal = () => {
    updateLog('Player Healed');
    const healPercentage = getRandomNumber(1, 10);
    setPlayerHealth(getHealedPlayerHealth(playerhealth, healPercentage));
  }

  const giveup = () => {
    setPlayerHealth(INITIAL_PLAYER_HEALTH)
    setMonsterHealth(INITIAL_MONSTER_HEALTH)
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
      <ActionContainer attack={attack} specialAttack={specialAttack} heal={heal} giveup={giveup} start={start} started={started}/>
      <LogContainer moves={actionLog}/>
    </div>
  )
}

export default PlayersActionsContainer
