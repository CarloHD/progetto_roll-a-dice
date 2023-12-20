/** Lancio del dado con suono e rotazione dado in base al risultato ottenuto tramite Mat.random() */

// istanza suono 'rollDice'
const rollDiceAudio = new Audio('media/roll_a_dice_audio.mp3')

const dado = document.getElementsByClassName('dado')[0]

dado.addEventListener('click', rollDice)

function resetDice () {
  dado.classList.remove(
    'risultato1',
    'risultato2',
    'risultato3',
    'risultato4',
    'risultato5',
    'risultato6'
  )
}
// Lancio dado
function rollDice () {
  // disattiva pulsante lancio dado
  dado.classList.add('disabled')
  const risultato = parseInt(Math.random() * (6 - 1 + 1) + 1)

  // timeout di attesa per effettiva di riproduzione audio, aggiunta animazione e rimozione precedenti classi risultato
  setTimeout(function () {
    rollDiceAudio.play()
    dado.classList.add('spinning')
    resetDice()
  }, 300)

  // timeout di attesa per aggiunta risultato e rimozione animazione
  setTimeout(function () {
    switch (risultato) {
      case 1:
        dado.classList.add('risultato1')
        break
      case 2:
        dado.classList.add('risultato2')
        break
      case 3:
        dado.classList.add('risultato3')
        break
      case 4:
        dado.classList.add('risultato4')
        break
      case 5:
        dado.classList.add('risultato5')
        break
      case 6:
        dado.classList.add('risultato6')
        break
    }
    dado.classList.remove('spinning')
    dado.classList.remove('disabled')
  }, 1300)
}
