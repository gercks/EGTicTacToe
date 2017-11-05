'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
// const index = require('./../index.js')

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
const whoseTurn = {
  playerX: true
}

const onNewGame = function (event) {
  event.preventDefault()
  $('td').html('')
  whoseTurn.playerX = true
  console.log('new game ran!')
  api.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const doTheGame = function () {
  if (whoseTurn.playerX === true) {
    if (($(this).html()) === '') {
    // should it be this.store.over?
      $(this).html('x')
    // store.cells.push
    } else {
      $('h2').html('you can\'t do that!')
    }
    whoseTurn.playerX = false
  } else {
    if ($(this).html() === '') {
      $(this).html('o')
    // store.cells.push
    } else {
      $('h2').html('you can\'t do that!')
    }
    whoseTurn.playerX = true
  }
}

// const checkForWin = function () {
//   if (($('#zero').html() === 'x') &&
//   ($('#one').html() === 'x') &&
//   ($('#two').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#three').html() === 'x') &&
// ($('#four').html() === 'x') &&
// ($('#five').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#six').html() === 'x') &&
// ($('#seven').html() === 'x') &&
// ($('#eight').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#zero').html() === 'x') &&
// ($('#three').html() === 'x') &&
// ($('#six').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#one').html() === 'x') &&
// ($('#four').html() === 'x') &&
// ($('#seven').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#two').html() === 'x') &&
// ($('#five').html() === 'x') &&
// ($('#eight').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#zero').html() === 'x') &&
// ($('#four').html() === 'x') &&
// ($('#eight').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#two').html() === 'x') &&
// ($('#four').html() === 'x') &&
// ($('#six').html() === 'x')) {
//     $('h2').html('x wins!')
//   } else if (($('#zero').html() === 'o') &&
//   ($('#one').html() === 'o') &&
//   ($('#two').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#three').html() === 'o') &&
// ($('#four').html() === 'o') &&
// ($('#five').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#sio').html() === 'o') &&
// ($('#seven').html() === 'o') &&
// ($('#eight').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#zero').html() === 'o') &&
// ($('#three').html() === 'o') &&
// ($('#sio').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#one').html() === 'o') &&
// ($('#four').html() === 'o') &&
// ($('#seven').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#two').html() === 'o') &&
// ($('#five').html() === 'o') &&
// ($('#eight').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#zero').html() === 'o') &&
// ($('#four').html() === 'o') &&
// ($('#eight').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else if (($('#two').html() === 'o') &&
// ($('#four').html() === 'o') &&
// ($('#six').html() === 'o')) {
//     $('h2').html('o wins!')
//   } else {
//     // console.log('keep trying e')
//   }
// }

const onPlay = function (event) {
  event.preventDefault()
  // add an if signed in thing here?
  doTheGame()
  // checkForWin()
  // api.play()
  //   .then(ui.playSuccess)
  //   .catch(ui.playFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#new-game').on('click', onNewGame)
  $('td').on('click', onPlay)
}

module.exports = {
  addHandlers
}
