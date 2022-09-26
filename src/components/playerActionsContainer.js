import React, {useState} from 'react'
import PlayerContainer from 'components/playerContainer'
import ActionContainer from 'components/actionContainer'
import LogContainer from 'components/logContainer'
import { INITIAL_MONSTER_HEALTH, INITIAL_PLAYER_HEALTH, MONSTER_ATTACK_TIMEOUT } from 'utils/constants'
import { getHealedPlayerHealth, getNewHealthVal, getPlayerHealth, getRandomNumber } from 'utils/helper'

function PlayersActionsContainer() {
  const [started, setStarted] = useState(false)
  const [playerhealth, setPlayerHealth] = useState(INITIAL_PLAYER_HEALTH)
  const [monsterhealth, setMonsterHealth] = useState(INITIAL_MONSTER_HEALTH)
  const [actionLog, setLog] = useState([])
  const [monsterTurn, setMonsterTurn] = useState(false);

  const attack = () => {
    updateLog('Player Attack');
    const healthPercentage = getRandomNumber(1, 10);
    setMonsterHealth(getNewHealthVal(monsterhealth, healthPercentage));
    setMonsterTurn(true);
    attackByMonster();
  }

  const specialAttack = () => {
    updateLog('Player Special Attack');
    const healthPercentage = getRandomNumber(10, 20);
    setMonsterHealth(getNewHealthVal(monsterhealth, healthPercentage));
    setMonsterTurn(true)
    attackByMonster()
  }

  const heal = () => {
    updateLog('Player Healed');
    const healPercentage = getRandomNumber(1, 10);
    setPlayerHealth(getHealedPlayerHealth(playerhealth, healPercentage));
    setMonsterTurn(true)
    attackByMonster();
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

  const attackByMonster = () => {
    setTimeout(() => {
      updateLog('Monster Attack')
      setPlayerHealth(getPlayerHealth(playerhealth))
      setMonsterTurn(false)
    }, MONSTER_ATTACK_TIMEOUT);
    
  }

  const updateLog = (logText) => {
    const logArray = actionLog;
    logArray.unshift(logText);
    setLog(logArray);
  }
  
  return (
    <div className='players-action-container'>
      <PlayerContainer userHealth={playerhealth} monsterHealth={monsterhealth}/>
      <ActionContainer monsterTurn={monsterTurn} attack={attack} specialAttack={specialAttack} heal={heal} giveup={giveup} start={start} started={started} disableSpecialAttack={playerhealth < 90}/>
      <LogContainer moves={actionLog}/>
    </div>
  )
}

export default PlayersActionsContainer
