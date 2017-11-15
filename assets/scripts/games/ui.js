'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up. Please try again.')
  console.error(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  $('.hideme').show()
  $('.signinreminder').hide()
  $('#sign-up-dropdown').hide()
  $('#sign-in-dropdown').hide()
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in. Please try again.')
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  console.log('signOut success ran. and nothing was returned')
  $('.hideme').hide()
  $('.keephidingme').hide()
  store.user = null
  $('td').html('')
  $('#massage').html('')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out. Please try again.')
  console.log('signOut failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password. Please try again.')
  console.log('changePassword failure ran. error is :', error)
}

const newGameSuccess = function (response) {
  $('#massage').text('Created Game successfully')
  $('#message').text('')
  $('td').html('')
  $('td').css('background-color', '#4286f4')
  $('.keephidingme').show()
  store.game = response.game
}

const newGameFailure = function (error) {
  $('massage').text('Unable to creat new game. Please try again.')
  console.log('newGameFailure ran. error is :', error)
}

const gameHistorySuccess = function (response) {
  $('#message').text(store.wins.length)
  $('#xwins').html('x wins: ' + store.wins.xwins.length)
  $('#owins').html('o wins: ' + store.wins.owins.length)
  $('#draws').html('draws: ' + store.wins.draws.length)
  // store.user = response.user
  store.games = response.games
  console.log(response.games)
}

const gameHistoryFailure = function (error) {
  $('#message').text('Unable to log game history')
  console.log('gameHistoryFailure ran. error is :', error)
}

const playSuccess = function (response) {
  console.log(response)
  if ($(event.target).html === 'x') {
    $('#message').html('o\'s turn')
  } else {
    $('#message').html('x\'s turn')
  }
  store.game = response.game
}

const playFailure = function (error) {
  $('#massage').text('you messed up...')
  console.log('play failure ran. error is :', error)
}

const gameOverSuccess = function (response) {
  store.game = response.game
  store.wins.draws.push(1)
  console.log('overTrue ran!')
}
const gameWonXSuccess = function (response) {
  store.game = response.game
  store.wins.xwins.push(1)
  console.log('gameWonX ran!')
}
const gameWonOSuccess = function (response) {
  store.game = response.game
  store.wins.owins.push(1)
  console.log('gameWonO ran!')
}
const overTrueFailure = function (error) {
  $('#massage').text('API error')
  console.log('overTrueFailure ran. error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  newGameFailure,
  playSuccess,
  playFailure,
  gameHistorySuccess,
  gameHistoryFailure,
  gameOverSuccess,
  overTrueFailure,
  gameWonOSuccess,
  gameWonXSuccess
}
