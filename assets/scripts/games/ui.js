'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  console.error(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  $('.hideme').show()
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  console.log('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  console.log('signOut failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  console.log('changePassword failure ran. error is :', error)
}

const newGameSuccess = function (response) {
  $('#massage').text('Created Game successfully')
  $('#message').text('')
  $('td').html('')
  $('.keephidingme').show()
  console.log('asdlkf')
  store.game = response.game
}

const newGameFailure = function (error) {
  $('massage').text('Error on change password')
  console.log('changePassword failure ran. error is :', error)
}

const gameHistorySuccess = function (response) {
  $('#message').text(store.wins.length)
  $('#xwins').html('x has won ' + store.wins.xwins.length + ' games')
  $('#owins').html('o has won ' + store.wins.owins.length + ' games')
  $('#draws').html('there has been ' + store.wins.draws.length + ' draws')
  // store.user = response.user
  store.games = response.games
  console.log(response.games)
}

const gameHistoryFailure = function (error) {
  $('#message').text('Error on get game history')
  console.log('signOut failure ran. error is :', error)
}

const playSuccess = function (response) {
  console.log(response)
  $('#message').html('')
  store.game = response.game
}

const playFailure = function (error) {
  $('#massage').text('you messed up...')
  console.log('play failure ran. error is :', error)
}

const overTrueSuccess = function (response) {
  store.game = response.game
  store.wins.draws.push(1)
  console.log('it all ran!')
}
const gameWonXSuccess = function (response) {
  store.game = response.game
  store.wins.xwins.push(1)
  console.log('it all ran!')
}
const gameWonOSuccess = function (response) {
  store.game = response.game
  store.wins.owins.push(1)
  console.log('it all ran!')
}
const overTrueFailure = function (error) {
  $('#massage').text('you messed up...')
  console.log('play failure ran. error is :', error)
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
  overTrueSuccess,
  overTrueFailure,
  gameWonOSuccess,
  gameWonXSuccess
}
