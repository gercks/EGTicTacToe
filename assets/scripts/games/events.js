'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const gameLogic = {
  playerX: true,
  gameIsOver: false
}

const onNewGame = function (event) {
  event.preventDefault()
  gameLogic.gameIsOver = false
  gameLogic.playerX = true
  $('td').html('')
  console.log('new game ran!')
  const data = getFormFields(this)
  api.createNewGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// const showGameHistory = function (event) {
//   event.preventDefault()
//   api.gameHistory()
//     .then(ui.gameHistorySuccess)
//     .catch(ui.gameHistoryFailure)
// }

const gameOver = function (event) {
  gameLogic.gameIsOver = true
  gameLogic.playerX = true
  api.overTrue(event)
    .then(ui.gameOverSuccess)
    .catch(ui.overTrueFailure)
  api.gameHistory()
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

const gameWonX = function (event) {
  gameLogic.gameIsOver = true
  gameLogic.playerX = true
  api.overTrue(event)
    .then(ui.gameWonXSuccess)
    .catch(ui.overTrueFailure)
  api.gameHistory()
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

const gameWonO = function (event) {
  gameLogic.gameIsOver = true
  gameLogic.playerX = true
  api.overTrue(event)
    .then(ui.gameWonOSuccess)
    .catch(ui.overTrueFailure)
  api.gameHistory()
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}
// #zero, #one, #two, #three, #four, #five, #six, #seven, #eight,
const checkForWin = function (event) {
  if (($('#zero').html() === 'x') &&
  ($('#one').html() === 'x') &&
  ($('#two').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#zero, #one, #two').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#three').html() === 'x') &&
($('#four').html() === 'x') &&
($('#five').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#three, #four, #five').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#six').html() === 'x') &&
($('#seven').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('#six, #seven, #eight').css('background-color', 'white')
    $('#massage').html('x wins!')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'x') &&
($('#three').html() === 'x') &&
($('#six').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#zero, #three, #six').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#one').html() === 'x') &&
($('#four').html() === 'x') &&
($('#seven').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#one, #seven, #four').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'x') &&
($('#five').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#two, #five, #eight').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'x') &&
($('#four').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#zero, #four, #eight').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'x') &&
($('#four').html() === 'x') &&
($('#six').html() === 'x')) {
    $('#massage').html('x wins!')
    $('#two, #four, #six').css('background-color', 'white')
    gameWonX()
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'o') &&
  ($('#one').html() === 'o') &&
  ($('#two').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#zero, #one, #two').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#three').html() === 'o') &&
($('#four').html() === 'o') &&
($('#five').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#three, #four, #five').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#six').html() === 'o') &&
($('#seven').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#six, #seven, #eight').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'o') &&
($('#three').html() === 'o') &&
($('#six').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#zero, #three, #six').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#one').html() === 'o') &&
($('#four').html() === 'o') &&
($('#seven').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#one, #seven, #four').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'o') &&
($('#five').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#two, #five, #eight').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'o') &&
($('#four').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#zero, #four, #eight').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'o') &&
($('#four').html() === 'o') &&
($('#six').html() === 'o')) {
    $('#massage').html('o wins!')
    $('#two, #four, #six').css('background-color', 'white')
    gameWonO()
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() !== '') &&
  ($('#one').html() !== '') &&
  ($('#two').html() !== '') &&
  ($('#three').html() !== '') &&
  ($('#four').html() !== '') &&
  ($('#five').html() !== '') &&
  ($('#six').html() !== '') &&
  ($('#seven').html() !== '') &&
  ($('#eight').html() !== '')) {
    $('#massage').html('it is a draw!')
    gameOver()
    gameLogic.gameIsOver = true
  } else {
  }
}

const doTheGame = function (event) {
  event.preventDefault()
  $('#massage').html('')
  if (gameLogic.playerX === true) {
    if ($(event.target).html() === '') {
      $(event.target).html('x')
      gameLogic.playerX = false
      $('#massage').html('o\'s turn')
      checkForWin()
      api.play(event)
        .then(ui.playSuccess)
        .catch(ui.playFailure)
    } else {
      $('#massage').html('this space is taken!')
    }
  } else {
    if ($(event.target).html() === '') {
      $(event.target).html('o')
      gameLogic.playerX = true
    $('#massage').html('x\'s turn')
      checkForWin()
      api.play(event)
        .then(ui.playSuccess)
        .catch(ui.playFailure)
    } else {
      $('#massage').html('this space is taken!')
    }
  }
}

const checkIfOver = function (event) {
  event.preventDefault()
  if (gameLogic.gameIsOver === false) {
    doTheGame(event)
  } else {
    $('#massage').html('this game is over - please click \'new game\'')
  }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('click', onNewGame)
  $('td').on('click', checkIfOver)
}

module.exports = {
  addHandlers
}
