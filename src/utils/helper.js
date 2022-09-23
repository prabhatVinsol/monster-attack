
export const getNewHealthVal = (currentHealth, healthPercentage) => (currentHealth - ((healthPercentage * currentHealth)/100)).toFixed(2);

export const getRandomNumber = (minNumber, maxNumber) => Math.floor(Math.random() * (maxNumber)) + minNumber;

export const getHealedPlayerHealth = (currentPlayerHealth, healPercentage) => {
    let playerHealth = currentPlayerHealth;
    const healthToBeAdded = (playerHealth * (healPercentage/100))
    const calHealth = Math.floor((playerHealth + Math.floor(healthToBeAdded.toFixed(2))))
    return (calHealth > 100 ? 100 : calHealth)
}