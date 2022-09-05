var time = 10
var timer = document.querySelector('.timer')
var correctInput = document.querySelector('input.correct')
var message = document.querySelector('.message')

var updateTimer = function () {
  timer.textContent = time
  time = time - 1

  if (time < 0) {
    clearInterval(interval)
    checkAnswer()
  }
}

var checkAnswer = function() {
  if (correctInput.checked) {
    console.log('Bravo, bonne réponse')
    message.textContent = 'Bravo, bonne réponse'
  } else {
    console.log('Retourne étudier...')
    message.textContent = 'Retourne étudier...'
  }
}

var interval = setInterval(updateTimer, 1000)
