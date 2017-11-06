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

// const game = {
//   'id': 1,
//   'cells': ['', '', '', '', '', '', '', '', ''],
//   'over': false,
//   'player_x': {
//     'id': 1,
//     'email': 'and@and.com'
//   },
//   'player_o': {
//     'id': 3,
//     'email':
//         'dna@dna.com'
//   }
// }
// const gameboard = {
//
// }

module.exports = {

}
