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

const onNewGame = function (event) {
  event.preventDefault()
  console.log('new game ran!')
  const data = getFormFields(this)
  api.createNewGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const showGameHistory = function (event) {
  event.preventDefault()
  api.gameHistory()
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

const gameLogic = {
  playerX: true,
  gameIsOver: false
}

const gameOver = function (event) {
  gameLogic.gameIsOver = true
  api.overTrue(event)
    .then(ui.overTrueSuccess)
    .catch(ui.overTrueFailure)
}

const checkForWin = function (event) {
  if (($('#zero').html() === 'x') &&
  ($('#one').html() === 'x') &&
  ($('#two').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#three').html() === 'x') &&
($('#four').html() === 'x') &&
($('#five').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#six').html() === 'x') &&
($('#seven').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'x') &&
($('#three').html() === 'x') &&
($('#six').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#one').html() === 'x') &&
($('#four').html() === 'x') &&
($('#seven').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'x') &&
($('#five').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'x') &&
($('#four').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'x') &&
($('#four').html() === 'x') &&
($('#six').html() === 'x')) {
    $('#massage').html('x wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'o') &&
  ($('#one').html() === 'o') &&
  ($('#two').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#three').html() === 'o') &&
($('#four').html() === 'o') &&
($('#five').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#sio').html() === 'o') &&
($('#seven').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'o') &&
($('#three').html() === 'o') &&
($('#sio').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#one').html() === 'o') &&
($('#four').html() === 'o') &&
($('#seven').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'o') &&
($('#five').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#zero').html() === 'o') &&
($('#four').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
    gameLogic.gameIsOver = true
  } else if (($('#two').html() === 'o') &&
($('#four').html() === 'o') &&
($('#six').html() === 'o')) {
    $('#massage').html('o wins!')
    gameOver(event)
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
    gameOver(event)
    gameLogic.gameIsOver = true
  } else {
  }
}

const doTheGame = function (event) {
  $('#massage').html('')
  if (gameLogic.playerX === true) {
    if ($(this).html() === '') {
      $(this).html('x')
    } else {
      $('#massage').html('you can\'t do that!')
    }
    gameLogic.playerX = false
    checkForWin()
  } else {
    if ($(this).html() === '') {
      $(this).html('o')
    } else {
      $('#massage').html('you can\'t do that!')
    }
    gameLogic.playerX = true
    checkForWin()
  }

  // const bloop = event.target
  api.play(event)
    .then(ui.playSuccess)
    .catch(ui.playFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('click', onNewGame)
  $('td').on('click', doTheGame)
  $('#playhistory').on('click', showGameHistory)
}

module.exports = {
  addHandlers
}
