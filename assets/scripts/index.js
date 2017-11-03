'use strict'
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// const gameEvents = require('./games/events')

// $(() => {
//   $('td').on('click', gameEvents.addX)
// })
//
const playerInfo = {
  playerX: true
}

$('td').on('click', function () {
  if (playerInfo.playerX === true) {
    if ($(this).html() === '') {
      $(this).html('x')
    } else {
      console.log('no')
    }
    playerInfo.playerX = false
  } else {
    if ($(this).html() === '') {
      $(this).html('o')
    } else {
      console.log('no')
    }
    playerInfo.playerX = true
  }
})

const authEvents = require('./games/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})
