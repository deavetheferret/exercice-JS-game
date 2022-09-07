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

var interval = setInterval(updateTimer, 800)

var selectedAnswer1 = document.querySelector('.answer-item-1')
var selectedAnswer2 = document.querySelector('.answer-item-2')
var selectedAnswer3 = document.querySelector('.answer-item-3')

var onSelected1 = function() {
  console.log('Selected 1!');
  document.querySelector('.answer-item-1').classList.toggle('selected')
}

var onSelected2 = function() {
  console.log('Selected 2!');
}

var onSelected3 = function() {
  console.log('Selected 3!');
}

selectedAnswer1.addEventListener('click', onSelected1)
selectedAnswer2.addEventListener('click', onSelected2)
selectedAnswer3.addEventListener('click', onSelected3)