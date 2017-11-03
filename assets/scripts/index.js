'use strict'
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('../store')

$(() => {
  setAPIOrigin(location, config)
})

const gameEvents = require('./games/events')

$(() => {
  $('td').on('click', gameEvents.addX)
})


const playerInfo = {
  playerX: true
}
const doTheGame = function () {
  const store = store.game
  if (playerInfo.playerX === true) {
    if (store.over === false) {
      // should it be this.store.over?
    $(this).html('x')
    store.over = true
    store.cells.push
  } else {
    $('h2').html('you can\'t do that!')
  }
  playerInfo.playerX = false
} else {
  if (store.over === false) {
    $(this).html('o')
    store.over = true
    store.cells.push
  } else {
    $('h2').html('you can\'t do that!')
  }
  playerInfo.playerX = true
}

const checkForWin = function () {
  if (($('#zero').html() === 'x') &&
  ($('#one').html() === 'x') &&
  ($('#two').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#three').html() === 'x') &&
($('#four').html() === 'x') &&
($('#five').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#six').html() === 'x') &&
($('#seven').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#zero').html() === 'x') &&
($('#three').html() === 'x') &&
($('#six').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#one').html() === 'x') &&
($('#four').html() === 'x') &&
($('#seven').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#two').html() === 'x') &&
($('#five').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#zero').html() === 'x') &&
($('#four').html() === 'x') &&
($('#eight').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#two').html() === 'x') &&
($('#four').html() === 'x') &&
($('#six').html() === 'x')) {
    $('h2').html('x wins!')
  } else if (($('#zero').html() === 'o') &&
  ($('#one').html() === 'o') &&
  ($('#two').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#three').html() === 'o') &&
($('#four').html() === 'o') &&
($('#five').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#sio').html() === 'o') &&
($('#seven').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#zero').html() === 'o') &&
($('#three').html() === 'o') &&
($('#sio').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#one').html() === 'o') &&
($('#four').html() === 'o') &&
($('#seven').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#two').html() === 'o') &&
($('#five').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#zero').html() === 'o') &&
($('#four').html() === 'o') &&
($('#eight').html() === 'o')) {
    $('h2').html('o wins!')
  } else if (($('#two').html() === 'o') &&
($('#four').html() === 'o') &&
($('#six').html() === 'o')) {
    $('h2').html('o wins!')
  } else {
    // console.log('keep trying e')
  }
}

const authEvents = require('./games/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})

module.exports = {
  // playerInfo,
  // doTheGame,
  // checkForWin
}
