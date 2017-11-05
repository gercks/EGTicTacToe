'use strict'
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./games/events')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  authEvents.addHandlers()
})

$('.hideme').hide()

// const gameboard = {
//
// }
module.exports = {
  // playerInfo,
  // doTheGame,
  // checkForWin
}
