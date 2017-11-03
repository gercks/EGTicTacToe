'use strict'
// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
//
// $(() => {
//   setAPIOrigin(location, config)
// })

// const gameEvents = require('./games/events')

// $(() => {
//   $('td').on('click', gameEvents.addX)
// })
//
const playerOneTurn = function () {
  $('td').click(function () {
  // console.log($(this).html())
    if (($('td').html() === '')) {
      $(this).html('x')
    } else {
      console.log('no')
    }
  })
}
