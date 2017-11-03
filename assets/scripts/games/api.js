'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createNewGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const play = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })a
}

//
// const show = function (x) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + x,
//     method: 'GET'
//   })
// }
//
// module.exports = {
//   show
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createNewGame,
  play
}
